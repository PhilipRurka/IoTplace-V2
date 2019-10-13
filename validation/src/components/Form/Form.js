import React from 'react';
import BubbleCard from '../BubbleCard/BubbleCard';
import styled from '@emotion/styled/macro';
import uuid from 'uuid';
import BasicButton from '../buttons/BasicButton';
import CreatePassword from '../CreatePassword';
import Input from '../Input/Input';
import Field from '../Field/Field';

class Form extends React.Component {
  letFocus = true

  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  FormWrapper = styled.form({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  });

  /** This is used in the submit button's Props. */
  submitButton = {
    marginTop: '30px'
  };
  /** End End End End End End End End End */
  
  componentDidMount() {
    /** Gets and stores Entries from LocalStorage. */
    let LocalStorageEntries = localStorage.getItem('entries');
    LocalStorageEntries = JSON.parse(LocalStorageEntries);
    /** If there are entries in LocalStorage */
    if(LocalStorageEntries && LocalStorageEntries.entries.length !== 0) {
      /** Displays the entries from LocalStorage onto the Display Section. */
      this.props.initEntries(LocalStorageEntries.entries);
    };
  };

  /** Triggered when the the form is submited. */
  handleSubmit = (event) => {
    /** Prevents the page from refreshing due to the default submit functionality. */
    event.preventDefault();

    const { props: { form, addEntry, updateForm } } = this;
    /** Creates a UUID */
    const id = uuid();

    /** Creates a new Entry. */
    const res = addEntry({
      id,
      ...form
    });

    if(res.status === 'success') {
      this.letFocus = true;
    };
  };

  updateInput = (name, value) => {
    let { updateForm } = this.props;
    updateForm({ name, value });
    this.giveFocus = false;
  };

  giveInputFocus = (input) => {
    if(this.letFocus) {
      input.focus();
      this.letFocus = false;
    };
  };

  render() {
    /** Deconstructing */
    const {
      FormWrapper,
      handleSubmit,
      submitButton,
      updateInput,
      giveInputFocus,
      props: {
        errorFields,
        theme,
        firstName,
        lastName,
        email
      }
    } = this;

    return (
      <BubbleCard label='Form Section' theme={theme}>
        <FormWrapper onSubmit={(event) => (handleSubmit(event))}>
          <Field
            TopChild
            Half
            label='First Name'
            theme={theme}
          >
            <Input
              type='text'
              name='firstName'
              error={errorFields.firstName}
              updateInput={updateInput}
              value={firstName}
              theme={theme}
              giveFocus={giveInputFocus}
            />
          </Field>
          <Field
            TopChild
            Half
            label='Last Name'
            theme={theme}
          >
            <Input
              type='text'
              name='lastName'
              error={errorFields.lastName}
              updateInput={updateInput}
              value={lastName}
              theme={theme}
            />
          </Field>
          <Field
            label='Email Adress'
            theme={theme}
          >
            <Input
              type='email'
              name='email'
              error={errorFields.email}
              updateInput={updateInput}
              value={email}
              theme={theme}
            />
          </Field>
          <CreatePassword />
          <BasicButton
            type='submit'
            color='green'
            size='lg'
            addedStyles={submitButton}
            theme={theme}
            >Submit
          </BasicButton>
        </FormWrapper>
      </BubbleCard>
    );
  };
};

export default Form;


/**
 * Create a Fields Component.
 */
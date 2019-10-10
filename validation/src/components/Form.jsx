import React from 'react';
import BubbleCard from './BubbleCard';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import uuid from 'uuid';
import BasicButton from './buttons/BasicButton';
import ColorTheme from '../themes/colors';
import CreatePassword from './CreatePassword';
import Input from './Input';
import {
  addEntry,
  initEntries,
  updateForm
} from '../redux/actions';

const mapToStateToProps = ({
  errorFields,
  theme,
  form,
  showingRequirements
}) => ({
  errorFields,
  theme,
  form,
  showingRequirements
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (payload) => dispatch(updateForm(payload)),
  addEntry: (entry) => dispatch(addEntry(entry)),
  initEntries: (entries) => dispatch(initEntries(entries))
});

/** Colors of the current theme. */
let colorTheme;

class Form extends React.Component {
  letFocus = false;

  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  FormWrapper = styled.form({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  });
  
  Input = styled.input(({ error }) => {
    
  });
  
  Field = styled.div(({ TopChild, Half, error }) => {
    /** If the field failed during the form validation process. */

    return {
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: (TopChild) ? '0' : '20px',
      flexBasis: (Half) ? 'calc(50% - 10px)' : '100%',

      'label': {
        color: colorTheme.primaryCopy,
        margin: '0',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'inline-block'
      }
    }
  });

  /** This is used in the submit button's Props. */
  submitButton = {
    marginTop: '30px'
  };

  /** End End End End End End End End End */
  
  componentDidMount() {
    /** Applies focus on the first input. */
    // this.firstNameInput.current.focus();
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

    const { formValues, props: { form, addEntry, updateForm } } = this;
    /** Creates a UUID */
    const id = uuid();
    /** Creates a new Entry. */
    addEntry({
      id,
      ...form
    });

    // FRONTEND: This doesn't work. This does not handle the if it fails case.
    updateForm({ name: 'reset' });

    this.letFocus = true;
  };

  updateInput = (name, value) => {
    let { updateForm } = this.props;
    updateForm({ name, value });
  };

  clearForm = () => {
    this.letFocus = false;
  };

  render() {
    /** Deconstructing */
    const {
      FormWrapper,
      Field,
      handleSubmit,
      firstNameInput,
      lastNameInput,
      emailInput,
      submitButton,
      updateInput,
      forceFocus,
      clearForm,
      letFocus,
      props: {
        errorFields,
        theme,
        form
      }
    } = this;

    colorTheme = ColorTheme[theme];

    // /** If a new entry successfully got added. */
    // if(errorFields.failedForm !== undefined && !errorFields.failedForm) {
    //   /** Resets input value. */
    //   this.firstNameInput.current.value = '';
    //   /** Resets input value. */
    //   this.lastNameInput.current.value = '';
    //   /** Resets input value. */
    //   this.emailInput.current.value = '';
    //   // /** Resets input value. */
    //   // this.passwordInput.current.value = '';
    //   errorFields.failedForm = undefined;
    // };

    return (
      <BubbleCard label='Form Section' theme={theme}>
        <FormWrapper onSubmit={(event) => (handleSubmit(event))}>
          <Field TopChild Half>
            <label>First Name</label>
            <Input
              type='text'
              giveFocus={forceFocus}
              name='firstName'
              error={errorFields.firstName}
              updateInput={updateInput}
            />
          </Field>
          <Field TopChild Half>
            <label>Last Name</label>
            <Input
              type='text'
              name='lastName'
              error={errorFields.lastName}
              updateInput={updateInput}
            />
          </Field>
          <Field>
            <label>Email Adress</label>
            <Input
              type='email'
              name='email'
              error={errorFields.email}
              updateInput={updateInput}
            />
          </Field>
          <Field>
            <CreatePassword />
          </Field>
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

const connectedForm = connect(mapToStateToProps, mapDispatchToProps) (Form);

export default connectedForm;
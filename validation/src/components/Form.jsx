import React from 'react';
import PasswordRequirements from './PasswordRequirements';
import BubbleCard from './BubbleCard';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import uuid from 'uuid';
import BasicButton from './buttons/BasicButton';
import ColorTheme from '../themes/colors';
import {
  addEntry,
  initEntries,
  updatePassword,
  toggleRequirements
} from '../redux/actions';

const mapToStateToProps = ({ errorFields, theme, password, showingRequirements }) => ({
  errorFields,
  theme,
  password,
  showingRequirements
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (entry) => dispatch(addEntry(entry)),
    initEntries: (entries) => dispatch(initEntries(entries)),
    updatePassword: (password) => dispatch(updatePassword(password)),
    toggleRequirements: (boolean) => dispatch(toggleRequirements(boolean))
  };
};

/** Colors of the current theme. */
let colorTheme;

class Form extends React.Component {
  /** Ref Ref Ref Ref Ref Ref Ref */
  firstNameInput = React.createRef();
  lastNameInput = React.createRef();
  emailInput = React.createRef();
  passwordInput = React.createRef();
  /** End End End End End End End */

  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  FormWrapper = styled.form({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  });
  
  Label = styled.label(() => ({
      color: colorTheme.primaryCopy,
      margin: '0',
      fontWeight: '600',
      letterSpacing: '0.5px',
      display: 'inline-block'
  }));
  
  Input = styled.input(({ error }) => {
    /** If the field failed during the form validation process. */
    const errorStyles = (error) ? {
      borderColor: colorTheme.error,
      '&:focus': { outlineColor: colorTheme.error }
    } : null;

    return {
      color: colorTheme.primaryCopy,
      display: 'block',
      backgroundColor: colorTheme.thirdaryBackground,
      border: `1px solid ${colorTheme.primaryBorder}`,
      borderRadius: '5px',
      padding: '10px',
      width: '100%',
      ...errorStyles
    }
  });
  
  Field = styled.div(({ TopChild, Half }) => ({
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: (TopChild) ? '0' : '20px',
    flexBasis: (Half) ? 'calc(50% - 10px)' : '100%'
  }));

  /** This is used in the submit button's Props. */
  submitButton = {
    marginTop: '30px'
  };

  ShowRequirements = styled.p(() => ({
    color: colorTheme.primaryCopy,
    margin: '0',
    float: 'right',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    marginTop: '6px',
    cursor: 'pointer',
    textDecoration: 'underline',
    userSelect: 'none',
    display: 'inline-block'
  }));
  /** End End End End End End End End End */
  
  componentDidMount() {
    /** Applies focus on the first input. */
    this.firstNameInput.current.focus();
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

    /** Creates a UUID */
    const id = uuid();
    /** Creates a new Entry. */
    this.props.addEntry({
      id,
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value
    });
  };

  /** Triggered when the ShowRequirement link is clicked. */
  handleShowRequirement = (toggleRequirements) => {
    /** Toggles the password requirements */
    toggleRequirements();
  };

  /** Triggered when the password input value changes. */
  passwordOnChange = (updatePassword) => {
    /** Updates the password on the Store. */
    updatePassword(this.passwordInput.current.value);
  };

  render() {
    /** Deconstructing */
    const {
      FormWrapper,
      Label,
      Input,
      Field,
      ShowRequirements,
      passwordOnChange,
      handleShowRequirement,
      handleSubmit,
      firstNameInput,
      lastNameInput,
      emailInput,
      passwordInput,
      submitButton,
      props: {
        errorFields,
        theme,
        updatePassword,
        showingRequirements,
        toggleRequirements
      }
    } = this;

    colorTheme = ColorTheme[theme];

    /** If a new entry successfully got added. */
    if(errorFields.failedForm !== undefined && !errorFields.failedForm) {
      /** Resets input value. */
      this.firstNameInput.current.value = '';
      /** Resets input value. */
      this.lastNameInput.current.value = '';
      /** Resets input value. */
      this.emailInput.current.value = '';
      /** Resets input value. */
      this.passwordInput.current.value = '';
      /** Applies focus on the first input. */
      this.firstNameInput.current.focus();
      errorFields.failedForm = undefined;
    };

    /** Deconstructing */
    const { firstName, lastName, email, password } = errorFields;

    return (
      <BubbleCard label='Form Section' theme={theme}>
        <FormWrapper onSubmit={handleSubmit}>
          <Field TopChild Half>
            <Label>First Name</Label>
            <Input
              type='text'
              ref={firstNameInput}
              error={firstName}
            />
          </Field>
          <Field TopChild Half>
            <Label>Last Name</Label>
            <Input
              type='text'
              ref={lastNameInput}
              error={lastName}
            />
          </Field>
          <Field>
            <Label>Email Adress</Label>
            <Input
              type='email'
              ref={emailInput}
              error={email}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <ShowRequirements onClick={() => (handleShowRequirement(toggleRequirements))}>
              {(showingRequirements) ? 'Hide Requirements' : 'Show Requirements'}
            </ShowRequirements>
            <PasswordRequirements />
            <Input
              type='password'
              ref={passwordInput}
              error={password}
              onChange={() => (passwordOnChange(updatePassword))}
            />
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
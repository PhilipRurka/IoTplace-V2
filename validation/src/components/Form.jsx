import React from 'react';
import PasswordRequirements from './PasswordRequirements';
import BubbleCard from './BubbleCard';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import { addEntry, initEntries } from '../redux/actions';
import uuid from 'uuid';
import BasicButton from './buttons/BasicButton';
import ColorTheme from '../themes/colors';

const mapToStateToProps = (state) => ({
  errorFields: state.errorFields,
  theme: state.theme
});

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: (entry) => dispatch(addEntry(entry)),
    initEntries: (entries) => dispatch(initEntries(entries))
  };
};

let colorTheme;

class Form extends React.Component {
  state = {
    theme: this.props.theme,
    showingRequirements: false,
    password: ''
  };

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
    this.firstNameInput.current.focus();
    let LocalStorageEntries = localStorage.getItem('entries');
    LocalStorageEntries = JSON.parse(LocalStorageEntries);
    if(LocalStorageEntries && LocalStorageEntries.entries.length !== 0) {
      this.props.initEntries(LocalStorageEntries.entries)
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let firstName = this.firstNameInput.current.value;
    let lastName = this.lastNameInput.current.value;
    let email = this.emailInput.current.value;
    let password = this.passwordInput.current.value;

    const id = uuid();
    this.props.addEntry({
      id,
      firstName,
      lastName,
      email,
      password
    });
  };

  handleShowRequirement = () => {
    let { showingRequirements } = this.state;
    showingRequirements = !showingRequirements;
    this.setState({ showingRequirements });
  };

  passwordOnChange = () => {
    this.setState({ password: this.passwordInput.current.value })
  };

  render() {
    const {
      state,
      FormWrapper,
      Label,
      Input,
      Field,
      ShowRequirements,
      passwordOnChange
    } = this;

    colorTheme = ColorTheme[state.theme];

    const { showingRequirements } = this.state;
    const { errorFields, theme } = this.props;

    if(errorFields.failedForm !== undefined && !errorFields.failedForm) {
      this.firstNameInput.current.value = '';
      this.lastNameInput.current.value = '';
      this.emailInput.current.value = '';
      this.passwordInput.current.value = '';
      this.firstNameInput.current.focus();
      errorFields.failedForm = undefined;
    };

    return (
      <BubbleCard label='Form Section' theme={theme}>
        <FormWrapper onSubmit={this.handleSubmit}>
          <Field TopChild Half>
            <Label>First Name</Label>
            <Input
              type='text'
              ref={this.firstNameInput}
              error={errorFields.firstName}
            />
          </Field>
          <Field TopChild Half>
            <Label>Last Name</Label>
            <Input
              type='text'
              ref={this.lastNameInput}
              error={errorFields.lastName}
            />
          </Field>
          <Field>
            <Label>Email Adress</Label>
            <Input
              type='email'
              ref={this.emailInput}
              error={errorFields.email}
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <ShowRequirements onClick={this.handleShowRequirement}>
              {(showingRequirements) ? 'Hide Requirements' : 'Show Requirements'}
            </ShowRequirements>
            <PasswordRequirements state={state} />
            <Input
              type='password'
              ref={this.passwordInput}
              error={errorFields.password}
              onChange={passwordOnChange}
            />
          </Field>
          <BasicButton
            type='submit'
            color='green'
            size='lg'
            addedStyles={this.submitButton}
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
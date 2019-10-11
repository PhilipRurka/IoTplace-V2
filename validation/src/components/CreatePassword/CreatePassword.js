import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
import PasswordRequirements from '../PasswordRequirements/PasswordRequirements';
import Field from '../Field/Field';
import Input from '../Input/Input';

let colorTheme;

class CreatePassword extends React.Component {
  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  CreatePasswordWrapper = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%'
  })

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

  updateInput = (name, value) => {
    const { updateForm } = this.props;
    /** Updates the password on the Store. */
    updateForm({ name, value });
  };

  render() {
    /** Deconstructing */
    const {
      ShowRequirements,
      handleShowRequirement,
      updateInput,
      CreatePasswordWrapper,
      props: {
        errorFields,
        theme,
        showingRequirements,
        toggleRequirements,
        password,
        confirmPassword
      }
    } = this;
    
    colorTheme = ColorTheme[theme];

    return (
      <CreatePasswordWrapper>
        <Field
          label='Password'
          theme={theme}
        >
          <ShowRequirements
            onClick={() => (handleShowRequirement(toggleRequirements))}
          >
            {(showingRequirements) ? 'Hide Requirements' : 'Show Requirements'}
          </ShowRequirements>
          <PasswordRequirements
            theme={theme}
            password={password}
            showingRequirements={showingRequirements} />
          <Input
            type='password'
            name='password'
            error={errorFields.password}
            updateInput={updateInput}
            value={password}
            theme={theme} />
        </Field>
        <Field
          label='Confirm Password'
          theme={theme}
        >
          <Input
            type='password'
            name='confirmPassword'
            error={errorFields.confirmPassword}
            updateInput={updateInput}
            value={confirmPassword}
            theme={theme} />
        </Field>
      </CreatePasswordWrapper>
    );
  };
};

export default CreatePassword;
import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import { updateForm, toggleRequirements } from '../redux/actions';
import ColorTheme from '../themes/colors';
import PasswordRequirements from './PasswordRequirements';
import Input from './Input';

const mapToStateToProps = ({
  errorFields,
  theme,
  form: { password },
  showingRequirements
}) => ({
  errorFields,
  theme,
  password,
  showingRequirements
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (payload) => dispatch(updateForm(payload)),
  toggleRequirements: () => dispatch(toggleRequirements())
});

let colorTheme;

class CreatePassword extends React.Component {
  /** Styled Styled Styled Styled Styled Styled Styled Styled */
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
      props: {
        errorFields,
        theme,
        showingRequirements,
        toggleRequirements,
        password
      }
    } = this;
    
    colorTheme = ColorTheme[theme];

    return (
      <div>
        <label>Password</label>
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
      </div>
    );
  };
};

const connectedCreatePassword = connect(mapToStateToProps, mapDispatchToProps) (CreatePassword);

export default connectedCreatePassword;



// Remove all Password things from Form
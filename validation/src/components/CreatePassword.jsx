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
  toggleRequirements: () => dispatch(toggleRequirements())
});

let colorTheme;

class CreatePassword extends React.Component {

/** Ref Ref Ref Ref Ref Ref Ref */
passwordInput = React.createRef();
/** End End End End End End End */

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


  updateInput = (name, value) => {
    /** Updates the password on the Store. */
    const { updateForm } = this.props;
    updateForm({ name, value });
  };

  render() {
    const {
      ShowRequirements,
      handleShowRequirement,
      updateInput,
      props: {
        errorFields,
        theme,
        showingRequirements,
        toggleRequirements
      }
    } = this;

    colorTheme = ColorTheme[theme];

    return (
      <div>
        <label>Password</label>
        <ShowRequirements onClick={() => (handleShowRequirement(toggleRequirements))}>
          {(showingRequirements) ? 'Hide Requirements' : 'Show Requirements'}
        </ShowRequirements>
        <PasswordRequirements />
        <Input
          type='password'
          name='password'
          error={errorFields.password}
          updateInput={updateInput}
        />
      </div>
    );
  };
};

const connectedCreatePassword = connect(mapToStateToProps, mapDispatchToProps) (CreatePassword);

export default connectedCreatePassword;



// Remove all Password things from Form
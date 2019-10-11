import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../../themes/colors';
// import { is } from '@babel/types';

/** Colors of the current theme. */
let colorTheme;

class Input extends React.Component {

  /** Ref Ref Ref Ref Ref Ref Ref */
  refInput = React.createRef();
  /** End End End End End End End */

  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  InputStyled = styled.input(({ error, addedStyles = null }) => {

    /** If the this input failed to meet the requirements. */
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
      ...errorStyles,
      ...addedStyles
    }
  });
  /** End End End End End End End End */

  componentDidMount() {
    /** Deconstructing */
    const {
      refInput,
      props: {
        value,
        giveFocus
      }
    } = this;

    refInput.current.value = value;
    (giveFocus) && giveFocus(refInput.current);
  };

  updateInputValue = (name) => {
    /** Deconstructing */
    const { refInput, props: { updateInput } } = this;
    /** Updates the form's field in the store. */
    updateInput(name, refInput.current.value);
  };

  render() {
    /** Deconstructing */
    const {
      InputStyled,
      refInput,
      updateInputValue,
      props: {
        name,
        type,
        theme,
        addedStyles = null,
        giveFocus = null,
        error,
        value = ''
      }
    } = this;

    colorTheme = ColorTheme[theme];

    if(refInput.current) {
      /** If the input has already been created */
      if(refInput.current.value) {
        /** Sets the value of the input incase the value changes. */
        refInput.current.value = value;
      };

      /** Re set the the focus on the desired input. */
      if(giveFocus) {
        giveFocus(refInput.current);
      };
    };

    return (
      <InputStyled
        type={type}
        addedStyles={addedStyles}
        ref={refInput}
        onChange={() => (updateInputValue(name))}
        error={error}
      />
    );
  };
};

export default Input;
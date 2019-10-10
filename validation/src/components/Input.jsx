import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../themes/colors';

/** Colors of the current theme. */
let colorTheme;

class Input extends React.Component {
  constructor() {
    super();
    this.updateInputValue = this.updateInputValue.bind(this);
  };

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
    const { refInput, props: { giveFocus } } = this;
    /** If this input has  */
    if(giveFocus) { refInput.current.focus(); };
  };

  updateInputValue(name) {
    const { refInput, props: { updateInput } } = this;
    updateInput(name, refInput.current.value);
  };

  render() {
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

    // This will have to change. Ths is Temporary. Place this as an attribute
    if(refInput.current && refInput.current.value) {
      refInput.current.value = value;
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
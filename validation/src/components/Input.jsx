import React from 'react';
import styled from '@emotion/styled/macro';
import ColorTheme from '../themes/colors';
// import { updateForm } from '../redux/actions';
import { connect } from 'react-redux';

const mapToStateToProps = ({
  errorFields,
  theme,
  form,
  form: { triggerReset }
}) => ({
  errorFields,
  theme,
  form,
  triggerReset
});

// const mapDispatchToProps = (dispatch) => ({
//   updateForm: (payload) => dispatch(updateForm(payload)),
// });

/** Colors of the current theme. */
let colorTheme;

class Input extends React.Component {
  constructor() {
    super();
    this.updateInputValue = this.updateInputValue.bind(this);
  };

  triggeredReset = false;

  /** Ref Ref Ref Ref Ref Ref Ref */
  refInput = React.createRef();
  /** End End End End End End End */

  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  InputStyled = styled.input(({ error, addedStyles = null }) => {

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
    const { refInput, props: { giveFocus } } = this;
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
        form,
        triggerReset
      }
    } = this;

    colorTheme = ColorTheme[theme];

    if(refInput.current && giveFocus) {
      refInput.current.focus(); 
    };

    debugger
    if(refInput.current && refInput.current.value) {
      refInput.current.value = form[name];
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

const connectedInput = connect(mapToStateToProps) (Input);

export default connectedInput;
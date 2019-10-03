import React from 'react';
import BubbleCard from './BubbleCard';
import styled from '@emotion/styled/macro';
import { connect } from 'react-redux';
import { addEntry } from '../redux/actions';
import uuid from 'uuid';

const mapDispatchToProps = (dispatch) => {
  return { addEntry: entry => dispatch(addEntry(entry)) };
};

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
  
  Label = styled.label({
    display: 'block',
    margin: '0',
    fontWeight: '600',
    letterSpacing: '0.5px'
  });
  
  Input = styled.input({
    backgroundColor: '#e1fffe',
    border: '1px solid #A9E5BB',
    borderRadius: '5px',
    padding: '10px',
    width: '100%'
  });
  
  Field = styled.div(({ TopChild, Half }) => ({
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: (TopChild) ? '0' : '20px',
      flexBasis: (Half) ? 'calc(50% - 10px)' : '100%'
    }));

  Submit = styled.button({
    marginTop: '30px',
    border: '1px solid #1cc950',
    backgroundColor: '#1cc950',
    borderRadius: '10px',
    padding: '10px 20px',
    color: 'white',
    letterSpacing: '0.5px',
    fontWeight: '600'
  });
  /** End End End End End End End End End */

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

    this.firstNameInput.current.value = '';
    this.lastNameInput.current.value = '';
    this.emailInput.current.value = '';
    this.passwordInput.current.value = '';
  }

  render() {
    const { FormWrapper, Label, Input, Field, Submit } = this;

    return (
      <BubbleCard label='Form Section'>
        <FormWrapper onSubmit={this.handleSubmit}>
          <Field TopChild Half>
            <Label>First Name</Label>
            <Input type='text' required ref={this.firstNameInput} />
          </Field>
          <Field TopChild Half>
            <Label>Last Name</Label>
            <Input type='text' required ref={this.lastNameInput} />
          </Field>
          <Field>
            <Label>Email Adress</Label>
            <Input type='email' required ref={this.emailInput} />
          </Field>
          <Field>
            <Label>Password (This will be displayed!)</Label>
            <Input type='password' required ref={this.passwordInput} />
          </Field>
          <Submit type='submit'>Submit</Submit>
        </FormWrapper>
      </BubbleCard>
    );
  };
};

const connectedForm = connect(null, mapDispatchToProps) (Form);

export default connectedForm;
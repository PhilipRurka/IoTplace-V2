import React from 'react';
import BubbleCard from './BubbleCard';
import styled from '@emotion/styled/macro';

class Form extends React.Component {
  /** Styled Styled Styled Styled Styled Styled Styled Styled */
  FormWrapper = styled.form({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '15px 0'
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
    padding: '5px',
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
    alert('Form Has Been Submited!');
  }

  render() {
    const { FormWrapper, Label, Input, Field, Submit } = this;

    return (
      <BubbleCard label='Form Section'>
        <FormWrapper onSubmit={this.handleSubmit}>
          <Field TopChild Half>
            <Label>First Name</Label>
            <Input type='text' />
          </Field>
          <Field TopChild Half>
            <Label>Last Name</Label>
            <Input type='text' />
          </Field>
          <Field>
            <Label>Email Adress</Label>
            <Input type='email' />
          </Field>
          <Field>
            <Label>Password (This will be displayed!)</Label>
            <Input type='password' />
          </Field>
          <Submit type='submit'>Submit</Submit>
        </FormWrapper>
      </BubbleCard>
    );
  };
};

export default Form;
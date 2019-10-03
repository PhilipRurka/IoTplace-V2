import React from 'react';
import BubbleCard from './BubbleCard';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';

const mapToStateToProps = (state) => ({ entries: state.entries });

/** Styled Styled Styled Styled Styled Styled Styled Styled */
const fontSize = {
  fontSize: '14px',
  display: 'inline-block',
  verticalAlign: 'top'
}

const HR = styled.hr({});

const Field = styled.div({});

const Label = styled.label(
  {
    fontWeight: '600',
    width: '85px',
    margin: '0'
  },
  fontSize
);

const Span = styled.span(
  {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 'calc(100% - 85px)',
    overflow: 'hidden'
  },
  fontSize
);
/** End End End End End End End End End */

const Display = ({ entries }) => {
  return (
    <BubbleCard className='col-6-md' label='Display Section'>
      {entries.map(({ id, firstName, lastName, email, password }, i) => (
        <div className="fields" key={id}>
          {(i > 0) && <HR />}
          <Field>
            <Label>UUID:</Label>
            <Span>{id}</Span>
          </Field>
          <Field>
            <Label>First Name:</Label>
            <Span>{firstName}</Span>
          </Field>
          <Field>
            <Label>Last Name:</Label>
            <Span>{lastName}</Span>
          </Field>
          <Field>
            <Label>Email:</Label>
            <Span>{email}</Span>
          </Field>
          <Field>
            <Label>Password:</Label>
            <Span>{password}</Span>
          </Field>
        </div>
      ))}
    </BubbleCard>
  );
};

const connectedDisplay = connect(mapToStateToProps) (Display)

export default connectedDisplay;
import React from 'react';
import BubbleCard from './BubbleCard';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import { removeEntry, removeAllEntries } from '../redux/actions';
import Buttons from './Buttons';

const mapToStateToProps = (state) => ({ entries: state.entries });

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntry: (id) => dispatch(removeEntry(id)),
    removeAllEntries: () => dispatch(removeAllEntries()),
  };
};


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

const removeAllButton = {
  position: 'absolute',
  top: '23px',
  right: '20px'
};

const EmptyEntries = styled.p({
  color: '#818181'
});
/** End End End End End End End End End */

const onRemoveAll = (removeAllEntries) => {
  removeAllEntries();
};

const Display = ({ entries, removeAllEntries, removeEntry }) => {
  return (
    <BubbleCard className='col-6-md' label='Display Section'>
      {(entries && entries.length !== 0)
      ? (
        <Buttons
          buttonType='basic'
          type='button'
          color='orange'
          size='sm'
          addedStyles={removeAllButton}
          handleClick={() => {onRemoveAll(removeAllEntries)}}>
          Remove All!
        </Buttons>
      ) : (
        <EmptyEntries>There are no current entries.<br />Fill out and submit the form.</EmptyEntries>
      )}
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

const connectedDisplay = connect(mapToStateToProps, mapDispatchToProps) (Display)

export default connectedDisplay;
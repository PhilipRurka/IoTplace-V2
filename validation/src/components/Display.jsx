import React from 'react';
import BubbleCard from './BubbleCard';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import { removeEntry, removeAllEntries } from '../redux/actions';
import BasicButton from './buttons/BasicButton';
import IconButton from './buttons/IconButton';

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

const removeEntries = {
  position: 'absolute',
  top: '0',
  right: '0'
};

const EmptyEntries = styled.p({
  color: '#818181'
});

const Fields = styled.div({
  position: 'relative'
});
/** End End End End End End End End End */

const onRemoveAll = (removeAllEntries) => {
  removeAllEntries();
};

const onRemoveEntry = (removeEntry, id) => {
  removeEntry(id);
};

const Display = ({ entries, removeAllEntries, removeEntry }) => {
  return (
    <BubbleCard className='col-6-md' label='Display Section'>
      {(entries && entries.length !== 0)
      ? (
        <BasicButton
          type='button'
          color='orange'
          size='sm'
          addedStyles={removeAllButton}
          handleClick={() => {onRemoveAll(removeAllEntries)}}
          >Remove All!
        </BasicButton>
      ) : (
        <EmptyEntries>There are no current entries.<br />Fill out and submit the form.</EmptyEntries>
      )}
      {entries.map(({ id, firstName, lastName, email, password }, i) => (
        <Fields key={id}>
          {(i > 0) && <HR />}
          <IconButton
            type='button'
            color='red'
            size='sm'
            icon='minus'
            addedStyles={removeEntries}
            handleClick={() => {onRemoveEntry(removeEntry, id)}}
            />
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
        </Fields>
      ))}
    </BubbleCard>
  );
};

const connectedDisplay = connect(mapToStateToProps, mapDispatchToProps) (Display)

export default connectedDisplay;
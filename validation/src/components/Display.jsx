import React from 'react';
import BubbleCard from './BubbleCard';
import { connect } from 'react-redux';
import styled from '@emotion/styled/macro';
import { removeEntry, removeAllEntries } from '../redux/actions';
import BasicButton from './buttons/BasicButton';
import IconButton from './buttons/IconButton';
import ColorTheme from '../themes/colors';
  let colorTheme;

const mapToStateToProps = ({ entries, theme }) => ({
  entries,
  theme
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeEntry: (id) => dispatch(removeEntry(id)),
    removeAllEntries: () => dispatch(removeAllEntries()),
  };
};

let copyColor;
/** Styled Styled Styled Styled Styled Styled Styled Styled */

const fontSize = {
  fontSize: '14px',
  display: 'inline-block',
  verticalAlign: 'top'
}

const HR = styled.hr({});

const Field = styled.div({});

const Label = styled.label(() => ({
  fontWeight: '600',
  width: '85px',
  margin: '0',
  ...fontSize,
  ...copyColor
}));

const Span = styled.span(() => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  width: 'calc(100% - 110px)',
  overflow: 'hidden',
  ...fontSize,
  ...copyColor
  }));

const removeAllButton = {
  marginBottom: '20px'
};

const removeEntries = {
  position: 'absolute',
  top: '0',
  right: '0'
};

const EmptyEntries = styled.p(() => ({
    color: colorTheme.secondaryCopy
}));

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

const Display = ({ theme, entries, removeAllEntries, removeEntry }) => {
  colorTheme = ColorTheme[theme];
  copyColor = { color: colorTheme.primaryCopy };
  return (
    <BubbleCard className='col-6-md' label='Display Section' theme={theme}>
      {(entries && entries.length !== 0)
      ? (
        <BasicButton
          type='button'
          color='orange'
          size='sm'
          addedStyles={removeAllButton}
          handleClick={() => {onRemoveAll(removeAllEntries)}}
          theme={theme}
          >Remove All!
        </BasicButton>
      ) : (
        <EmptyEntries theme={theme}>There are no current entries.<br />Fill out and submit the form.</EmptyEntries>
      )}
      {entries.map(({ id, firstName, lastName, email, password }, i) => (
        <div key={id}>
          {(i > 0) && <HR />}
          <Fields>
            <IconButton
              type='button'
              color='red'
              size='sm'
              icon='minus'
              addedStyles={removeEntries}
              handleClick={() => {onRemoveEntry(removeEntry, id)}}
              theme={theme}
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
        </div>
      ))}
    </BubbleCard>
  );
};

const connectedDisplay = connect(mapToStateToProps, mapDispatchToProps) (Display)

export default connectedDisplay;
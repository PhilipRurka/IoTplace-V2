import React from 'react';
import BubbleCard from '../BubbleCard/BubbleCard';
import styled from '@emotion/styled/macro';
import BasicButton from '../buttons/BasicButton';
import IconButton from '../buttons/IconButton';
import ColorTheme from '../../themes/colors';

/** Colors of the current theme. */
let colorTheme;

/** Styled Styled Styled Styled Styled Styled Styled Styled */
/** Shared color styles. */
let copyColor;

const fontSize = {
  fontSize: '14px',
  display: 'inline-block',
  verticalAlign: 'top'
}

const Field = styled.div(() => ({
  'label': {
    fontWeight: '600',
    width: '85px',
    margin: '0',
    ...fontSize,
    ...copyColor
  },
  'span': {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 'calc(100% - 110px)',
    overflow: 'hidden',
    ...fontSize,
    ...copyColor
  }
}));

/** This is used in the entry removal button's Props. */
const removeAllButton = {
  marginBottom: '20px'
};

/** This is used in the removal all entries button Props. */
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

/** Triggered when the Remove All button is clicked. */
const onRemoveAll = (removeAllEntries) => {
  /** Removes all Entries. */
  removeAllEntries();
};

/** Triggered when the remove entry button is clicked. */
const onRemoveEntry = (removeEntry, id) => {
  /** Removes a single entry. */
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
          {(i > 0) && <hr />}
          <Fields>
            <IconButton
              type='button'
              color='red'
              size='sm'
              icon='minus'
              addedStyles={removeEntries}
              handleClick={() => {onRemoveEntry(removeEntry, i)}}
              theme={theme}
              />
            <Field>
              <label>UUID:</label>
              <span>{id}</span>
            </Field>
            <Field>
              <label>First Name:</label>
              <span>{firstName}</span>
            </Field>
            <Field>
              <label>Last Name:</label>
              <span>{lastName}</span>
            </Field>
            <Field>
              <label>Email:</label>
              <span>{email}</span>
            </Field>
            <Field>
              <label>Password:</label>
              <span>{password}</span>
            </Field>
          </Fields>
        </div>
      ))}
    </BubbleCard>
  );
};

export default Display;
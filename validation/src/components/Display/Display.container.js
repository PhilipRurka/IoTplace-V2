import Display from './Display';
import { connect } from 'react-redux';
import { removeEntry, removeAllEntries } from '../../redux/actions';

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

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (Display);
import Form from './Form';
import { connect } from 'react-redux';
import {
  addEntry,
  initEntries,
  updateForm
} from '../../redux/actions';

const mapToStateToProps = ({
  errorFields,
  theme,
  form,
  form: {
    firstName,
    lastName,
    email
  },
  showingRequirements
}) => ({
  errorFields,
  theme,
  form,
  firstName,
  lastName,
  email,
  showingRequirements
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (payload) => dispatch(updateForm(payload)),
  addEntry: (entry) => dispatch(addEntry(entry)),
  initEntries: (entries) => dispatch(initEntries(entries))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (Form);
import CreatePassword from './CreatePassword';
import { connect } from 'react-redux';
import {
  updateForm,
  toggleRequirements
} from '../../redux/actions';

const mapToStateToProps = ({
  errorFields,
  theme,
  form: { password },
  showingRequirements
}) => ({
  errorFields,
  theme,
  password,
  showingRequirements
});

const mapDispatchToProps = (dispatch) => ({
  updateForm: (payload) => dispatch(updateForm(payload)),
  toggleRequirements: () => dispatch(toggleRequirements())
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (CreatePassword);
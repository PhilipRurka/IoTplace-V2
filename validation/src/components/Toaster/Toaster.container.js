import Toaster from './Toaster';
import { connect } from 'react-redux';
import { deleteToast } from '../../redux/actions';

const mapToStateToProps = ({
  theme,
  toaster: {
    toastList,
    flicker,
  }
}) => ({
  theme,
  toastList,
  flicker
});

const mapDispatchToProps = (dispatch) => ({
  deleteToast: (id) => dispatch(deleteToast(id))
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (Toaster);
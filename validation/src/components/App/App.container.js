import App from './App';
import { connect } from 'react-redux';
import { toggleTheme } from '../../redux/actions';

const mapToStateToProps = ({ theme }) => ({ theme });
const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(
  mapToStateToProps,
  mapDispatchToProps
) (App);

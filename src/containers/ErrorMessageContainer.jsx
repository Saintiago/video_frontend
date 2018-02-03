import { connect } from 'react-redux'
import ErrorMessage from '../components/ErrorMessage'
import { hideErrors } from '../actions/actions';

const mapStateToProps = state => {
  return {
    errorText: state.view.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(hideErrors())
  }
};


const ErrorMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);

export default ErrorMessageContainer;
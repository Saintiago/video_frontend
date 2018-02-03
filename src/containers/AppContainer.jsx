import { connect } from 'react-redux'
import App from '../components/App'
import {goToList} from '../actions/actions';

const mapStateToProps = state => {
  return {
    currentView: state.view.currentView,
    loading: state.view.loading,
    error: state.view.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onBackButtonClick: () => dispatch(goToList())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
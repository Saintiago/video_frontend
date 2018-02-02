import { connect } from 'react-redux'
import App from '../components/App'
import {goToList} from '../actions/actions';

const mapStateToProps = state => {
  return {
    currentView: state.view
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
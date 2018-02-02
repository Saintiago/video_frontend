import { connect } from 'react-redux'
import App from '../components/App'
import { switchView } from '../actions/actions';

const mapStateToProps = state => {
  return {
    view: state.view
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onViewSwitch: (viewId) => dispatch(switchView(viewId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
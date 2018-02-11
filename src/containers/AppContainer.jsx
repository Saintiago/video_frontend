import { connect } from 'react-redux'
import App from '../components/App'
import {goToList, uploadVideo} from '../actions/actions';

const mapStateToProps = state => {
  return {
    currentView: state.view.currentView,
    loading: state.view.loading,
    error: state.view.error,
    isUploading: state.view.isUploading,
    progress: state.view.progress
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onBackButtonClick: () => dispatch(goToList()),
    onFileSelected: (event) => dispatch(uploadVideo(event))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
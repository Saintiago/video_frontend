import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import { requestVideo, uploadVideo } from '../actions/actions';

const mapStateToProps = state => {
  return {
    items: state.videoList.items,
    isUploading: state.videoList.isUploading,
    progress: state.videoList.progress
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (id) => dispatch(requestVideo(id)),
    onFileSelected: (event) => dispatch(uploadVideo(event))
  }
};


const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer
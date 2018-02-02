import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import { requestVideo } from '../actions/actions';

const mapStateToProps = state => {
  return {
    items: state.videoList.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: (id) => dispatch(requestVideo(id))
  }
};


const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer
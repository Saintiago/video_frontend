import { connect } from 'react-redux'
import VideoList from '../components/VideoList'

const mapStateToProps = state => {
  return {
    items: state.videoList.items
  }
};

const VideoListContainer = connect(
  mapStateToProps
)(VideoList);

export default VideoListContainer
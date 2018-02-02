import { connect } from 'react-redux'
import VideoDetailed from '../components/VideoDetailed'

const mapStateToProps = state => {
  return {
    video: state.videoDetailed.video
  }
};

const VideoDetailedContainer = connect(
  mapStateToProps,
)(VideoDetailed);

export default VideoDetailedContainer;
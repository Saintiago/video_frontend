import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import {paginate, requestStatus, requestVideo} from '../actions/actions';

const mapStateToProps = state => {
  return {
    items: state.videoList.items,
    paginationParams: state.videoList.paginationParams,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => dispatch(requestVideo(id)),
    onItemNotLoaded: id => dispatch(requestStatus(id)),
    onPaginationClicked: params => dispatch(paginate(params))
  }
};


const VideoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

export default VideoListContainer
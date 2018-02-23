import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import {paginate} from '../actions/actions';
import {requestStatus} from '../actions/requestStatus'
import {requestVideo} from '../actions/requestVideo'

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
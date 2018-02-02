import React from 'react'
import PropTypes from 'prop-types'

class VideoDetailed extends React.Component {
  render() {
    let video = this.props.video;
    return (
      <ul>
        <li>id: {video.id}</li>
        <li>name: {video.name}</li>
        <li>duration: {video.duration}</li>
        <li>thumbnail: {video.thumbnail}</li>
        <li>url: {video.url}</li>
      </ul>
    );
  }
}

VideoDetailed.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.number,
    thumbnail: PropTypes.string,
    url: PropTypes.string
  })
};

export default VideoDetailed;
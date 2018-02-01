import React from 'react'
import PropTypes from 'prop-types'

class VideoList extends React.Component {

  renderItems() {
    return this.props.items.map(function(item) {
      return <li>{item.name}</li>
    });
  }

  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

VideoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      duration: PropTypes.number,
      thumbnail: PropTypes.string
    })
  )
};

export default VideoList;
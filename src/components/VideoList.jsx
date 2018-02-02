import React from 'react'
import PropTypes from 'prop-types'

class VideoList extends React.Component {

  renderItems() {
    let itemClickHandler = this.props.onItemClick.bind(this);
    return this.props.items.map(function(item) {
      return (
        <li key={item.id} onClick={() => itemClickHandler(item.id)}>
          {item.name}
        </li>
      )
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
  ),
  onItemClick: PropTypes.func
};

export default VideoList;
import React from 'react'
import PropTypes from 'prop-types'

class VideoList extends React.Component {

  constructor(props) {
    super(props);

    this.items = this.props.items;
  }

  renderItems() {
    return this.items.map(function(item) {
      console.log(item);
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
  ),
  onMount: PropTypes.func
};

export default VideoList;
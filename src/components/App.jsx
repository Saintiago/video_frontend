import React from 'react'
import VideoListContainer from '../containers/VideoListContainer'
import VideoDetailedContainer from '../containers/VideoDetailedContainer'
import PropTypes from 'prop-types'
import VideoList from './VideoList'
import * as view from '../routing/views'

class App extends React.Component {
  render() {
    switch (this.props.view) {
      case view.DETAILED:
        return <VideoDetailedContainer />;
      case view.LIST:
      default:
        return <VideoListContainer />;
    }
  }
}

VideoList.propTypes = {
  view: PropTypes.string,
  onViewSwitch: PropTypes.func
};

export default App;
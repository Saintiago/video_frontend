import React from 'react'
import VideoListContainer from '../containers/VideoListContainer'
import VideoDetailedContainer from '../containers/VideoDetailedContainer'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import * as view from '../routing/views'
import ErrorMessageContainer from '../containers/ErrorMessageContainer'
import FileUpload from 'material-ui-icons/FileUpload';
import {LinearProgress, CircularProgress} from 'material-ui/Progress'


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  preloader: {
    marginBottom: -5
  },
  uploadIcon: {
    marginLeft: 5
  },
  input: {
    display: 'none'
  },
  spinner: {
    margin: '0 auto',
    display: 'block'
  }
};

function App(props) {

  const {classes, currentView, onBackButtonClick, loading, error, onFileSelected, isUploading, progress} = props;

  const isDetailedView = (currentView === view.DETAILED);

  let uploadHandler = onFileSelected.bind(this);

  let renderContent = () => {
    switch (currentView) {
      case view.DETAILED:
        return <VideoDetailedContainer/>;
      case view.LIST:
        return <VideoListContainer/>;
    }
  };

  let renderUploadingButton = () => (
    <Button component="span" disabled>
      <CircularProgress
        size={20}
        variant="determinate"
        value={progress}
        className={classes.spinner}
      />
    </Button>
  );

  let renderReadyToUploadIButton = () => (
    <div>
      <input
        onChange={(event) => uploadHandler(event)}
        className={classes.input}
        id="raised-button-file"
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button component="span">
          <Typography variant="button">Upload</Typography>
          <FileUpload className={classes.uploadIcon}/>
        </Button>
      </label>
    </div>
  );

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Go workshop 2018
          </Typography>
          {isUploading ? renderUploadingButton() : renderReadyToUploadIButton()}
          {isDetailedView ? <Button onClick={onBackButtonClick} color="inherit">Back to list</Button> : ''}
        </Toolbar>
      </AppBar>
      {loading ? <LinearProgress className={classes.preloader} mode="query"/> : ''}
      {isUploading ? <LinearProgress variant="determinate" value={progress} className={classes.preloader}/> : ''}
      {error !== '' ? <ErrorMessageContainer/> : ''}
      {renderContent()}
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  currentView: PropTypes.string,
  onBackButtonClick: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  onFileSelected: PropTypes.func,
  isUploading: PropTypes.bool,
  progress: PropTypes.number
};

export default withStyles(styles)(App)
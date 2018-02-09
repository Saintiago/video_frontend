import React from 'react'
import PropTypes from 'prop-types'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import FileUpload from 'material-ui-icons/FileUpload';
import PlayCircleFilled from 'material-ui-icons/PlayCircleFilled';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress'
import * as status from '../lib/videoStatus'

const styles = () => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  inactive: {
    cursor: 'default',
  },
  uploadButton: {
    width: '100%',
    height: '100%'
  },
  uploadIcon: {
    width: '100%',
    height: '100%'
  },
  input: {
    display: 'none'
  },
  spinner: {
    margin: '40px auto',
    display: 'block'
  }
});

function VideoList(props) {
  const {classes, items, onItemClick, onFileSelected, isUploading, progress} = props;

  let itemClickHandler = onItemClick.bind(this);
  let uploadHandler = onFileSelected.bind(this);

  let renderUploadingTile = () => (
    <GridListTile key="Upload">
      <CircularProgress
        size={100}
        variant="determinate"
        value={progress}
        className={classes.spinner}
      />
    </GridListTile>
  );

  let renderReadyToUploadTile = () => (
    <GridListTile key="Upload">
      <input
        onChange={(event) => uploadHandler(event)}
        className={classes.input}
        id="raised-button-file"
        type="file"
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span" className={classes.uploadButton}>
          <FileUpload iconStyle={classes.uploadIcon} />
        </Button>
      </label>
    </GridListTile>
  );

  let renderStatusIcon = (itemStatus) => {
    switch (itemStatus) {
      case status.LOADING:
        return (
          <IconButton className={classes.inactive}>
            <CircularProgress size={20} />
          </IconButton>
        );
      case status.READY:
      default:
        return (
          <IconButton onClick={() => itemClickHandler(tile.id)}>
            <PlayCircleFilled />
          </IconButton>
        );
    }
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <Subheader component="div">My videos</Subheader>
        </GridListTile>
        {items.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.thumbnail} alt={tile.title} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>Duration: {tile.duration}</span>}
              actionIcon={renderStatusIcon(tile.status)}
            />
          </GridListTile>
        ))}
        {isUploading ? renderUploadingTile() : renderReadyToUploadTile()}
      </GridList>
    </div>
  );
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      duration: PropTypes.number,
      thumbnail: PropTypes.string,
      status: PropTypes.number
    })
  ),
  onItemClick: PropTypes.func,
  onFileSelected: PropTypes.func,
  isUploading: PropTypes.bool,
  progress: PropTypes.number
};

export default withStyles(styles, {withTheme: false})(VideoList);
import React from 'react'
import PropTypes from 'prop-types'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import PlayCircleFilled from 'material-ui-icons/PlayCircleFilled';
import {withStyles} from 'material-ui/styles';
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
  }
});

function VideoList(props) {
  const {classes, items, onItemClick} = props;

  let itemClickHandler = onItemClick.bind(this);

  let renderStatusIcon = (itemStatus, id) => {
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
          <IconButton onClick={() => itemClickHandler(id)}>
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
              actionIcon={renderStatusIcon(tile.status, tile.id)}
            />
          </GridListTile>
        ))}
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
  onItemClick: PropTypes.func
};

export default withStyles(styles, {withTheme: false})(VideoList);
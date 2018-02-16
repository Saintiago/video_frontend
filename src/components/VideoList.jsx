import React from 'react'
import PropTypes from 'prop-types'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import PlayCircleFilled from 'material-ui-icons/PlayCircleFilled';
import ErrorIcon from 'material-ui-icons/Error';
import DeleteIcon from 'material-ui-icons/Delete';
import {withStyles} from 'material-ui/styles';
import {CircularProgress} from 'material-ui/Progress'
import * as status from '../lib/videoStatus'

import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

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
  const {classes, items, onItemClick, onItemNotLoaded, onPaginationClicked, paginationParams} = props;

  let itemClickHandler = onItemClick.bind(this);

  let renderStatusIcon = (itemStatus, id) => {
    switch (itemStatus) {
      case status.CREATED:
      case status.PROCESSING:
        return (
          <IconButton className={classes.inactive}>
            <CircularProgress size={20}/>
          </IconButton>
        );
      case status.DELETED:
        return (
          <IconButton className={classes.inactive}>
            <DeleteIcon/>
          </IconButton>
        );
      case status.ERROR:
        return (
          <IconButton className={classes.inactive} label="Deleted">
            <ErrorIcon/>
          </IconButton>
        );
      case status.READY:
      default:
        return (
          <IconButton onClick={() => itemClickHandler(id)}>
            <PlayCircleFilled/>
          </IconButton>
        );
    }
  };
  const {skip, limit} = paginationParams;
  const activePage = skip / limit;
  const nextPageParams = {limit: limit, skip: skip + limit};
  const prevPageParams = {limit: limit, skip: skip - limit};

  for (const index in items) {
    if ([status.CREATED, status.PROCESSING].indexOf(items[index].status) > -1) {
      onItemNotLoaded(items[index].id);
    }
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
          <Subheader component="div">My videos</Subheader>
        </GridListTile>
        {items.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.thumbnail} alt={tile.title}/>
            <GridListTileBar
              title={tile.name}
              subtitle={<span>Duration: {tile.duration}</span>}
              actionIcon={renderStatusIcon(tile.status, tile.id)}
            />
          </GridListTile>
        ))}
        <GridListTile key="Pagination" cols={2} style={{height: 'auto'}}>
          <MobileStepper
            variant="text"
            position="static"
            activeStep={activePage}
            nextButton={
              <Button size="small" onClick={() => onPaginationClicked(nextPageParams)}>
                Next
                <KeyboardArrowRight/>
              </Button>
            }
            backButton={
              <Button size="small" onClick={() => onPaginationClicked(prevPageParams)} disabled={activePage === 0}>
                <KeyboardArrowLeft/>
                Back
              </Button>
            }
          />
        </GridListTile>
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
  onItemNotLoaded: PropTypes.func,
  onPaginationClicked: PropTypes.func,
  paginationParams: PropTypes.shape({
    skip: PropTypes.number,
    limit: PropTypes.number
  })
};

export default withStyles(styles, {withTheme: false})(VideoList);
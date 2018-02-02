import React from 'react'
import PropTypes from 'prop-types'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import PlayIcon from 'material-ui-icons/PlayCircleFilled';
import { withStyles } from 'material-ui/styles';

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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function VideoList(props) {
  const { classes, items, onItemClick } = props;
  let itemClickHandler = onItemClick.bind(this);
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">My videos</Subheader>
        </GridListTile>
        {items.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.thumbnail} alt={tile.title} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>Duration: {tile.duration}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <PlayIcon onClick={() => itemClickHandler(tile.id)}/>
                </IconButton>
              }
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
      thumbnail: PropTypes.string
    })
  ),
  onItemClick: PropTypes.func
};

export default withStyles(styles, { withTheme: false })(VideoList);
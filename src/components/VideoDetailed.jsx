import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: 500
  },
  paper: {
    padding: 16,
    textAlign: 'center',
  },
  video: {
    maxWidth: 400
  }
});

function VideoDetailed (props) {
  const {classes, video} = props;
  return (
    <Grid container className={classes.root} spacing={24}>
      <Grid item xs>
      <Paper className={classes.paper}>
        <video className={classes.video} poster={video.thumbnail} controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>
      </Grid>
      <Grid item xs>
      <Paper className={classes.paper}>
        <Typography type="headline" component="h3">
          {video.name}
        </Typography>
        <Typography component="p">
          Duration: {video.duration}
        </Typography>
      </Paper>
      </Grid>
    </Grid>
  )
}

VideoDetailed.propTypes = {
  classes: PropTypes.object.isRequired,
  video: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.number,
    thumbnail: PropTypes.string,
    url: PropTypes.string
  })
};

export default withStyles(styles)(VideoDetailed);
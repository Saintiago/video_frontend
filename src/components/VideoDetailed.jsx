import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

function VideoDetailed (props) {
  const {video} = props;
  return (
    <Grid container>
      <Grid item xs={12}>
      <Paper>
        <video poster={video.thumbnail} controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Paper>
      </Grid>
      <Grid item xs={12}>
      <Paper>
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
  video: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    duration: PropTypes.number,
    thumbnail: PropTypes.string,
    url: PropTypes.string
  })
};

export default VideoDetailed;
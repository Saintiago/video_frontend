import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

function ErrorMessage (props) {

  const { errorText, onClose } = props;
  return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={true}
        autoHideDuration={10000}
        onClose={onClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Error: {errorText}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
  );
}

ErrorMessage.propTypes = {
  errorText: PropTypes.string,
  onClose: PropTypes.func
};

export default ErrorMessage;

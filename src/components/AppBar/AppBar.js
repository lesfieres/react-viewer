/* eslint-disable prop-types */
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'left',
  },
});

const RVAppBar = (props) => {
  const { classes } = props;

  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Les fieres
        </Typography>
        <Button>Features</Button>
        <Button>Enterprise</Button>
        <Button>Support</Button>
        <Button color="primary" variant="outlined">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

RVAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RVAppBar);

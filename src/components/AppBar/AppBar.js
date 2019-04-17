/* eslint-disable prop-types */
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const styles = () => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'left',
  },
});

const RVAppBar = props => {
  const { classes, currentPalette, setTheme } = props;
  const switchTheme = useCallback(() => {
    if (currentPalette === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [currentPalette, setTheme]);

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
        <Link to={'books'} className="btn btn-dark btn-block">
          <Button>Books</Button>
        </Link>
        <Link to={''} className="btn btn-dark btn-block">
          <Button>Home</Button>
        </Link>
        <Switch
          defaultChecked
          value="checked"
          color="default"
          onChange={switchTheme}
        />
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

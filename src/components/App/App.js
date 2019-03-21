/* eslint-disable prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../AppBar/AppBar';
import logo from '../../logo.svg';
import './App.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

const App = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header>
          <AppBar classes={classes} />
        </header>
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/components/App/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

/* eslint-disable prop-types */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '../AppBar/AppBar';
import './App.css';

import Books from '../Books/Books';
import Home from '../Home/Home';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

const App = props => {
  const { classes } = props;

  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header>
            <AppBar classes={classes} />
          </header>
          <div className="App-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

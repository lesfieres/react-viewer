/* eslint-disable prop-types */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';

import AppBar from '../AppBar/AppBar';
import './App.css';

import Books from '../Books/Books';
import Home from '../Home/Home';

const styles = theme => ({
  '@global': {
    body: {},
  },
});

const App = props => {
  const { classes } = props;

  const [paletteType, setPaletteType] = useState('light');

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
    },
    typography: { useNextVariants: true },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="App">
            <header>
              <AppBar
                classes={classes}
                currentPalette={paletteType}
                setTheme={setPaletteType}
              />
            </header>
            <div className="App-body">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/books" component={Books} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

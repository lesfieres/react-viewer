/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AppBar from './AppBar';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<AppBar />);
});

/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

describe('Item component test', () => {
  it('renders without crashing when has the correct props', () => {
    const div = document.createElement('div');
    const props = {
      item: {
        author: {},
      },
    };

    ReactDOM.render(<Item {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

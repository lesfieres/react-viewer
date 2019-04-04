/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Item from './Item';

describe('Item component test', () => {
  it('renders without crashing when has the correct props', () => {
    const renderer = new ShallowRenderer();

    const props = {
      item: {
        author: {},
      },
      classes: {},
    };

    renderer.render(<Item {...props} />);
    renderer.getRenderOutput();
  });
});

/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useMappedState } from 'redux-react-hook';
import ShallowRenderer from 'react-test-renderer/shallow';
import Books from './Books';

describe('Books component test', () => {
  const renderer = new ShallowRenderer();

  it('renders without items', () => {
    useMappedState.mockImplementation(() => ({
      books: [],
    }));

    renderer.render(<Books classes={{}} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('renders with items', done => {
    useMappedState.mockImplementation(() => ({
      books: [{ id: '1', author: {} }, { id: '2', author: {} }],
    }));

    renderer.render(<Books classes={{}} />);
    const result = renderer.getRenderOutput();

    setTimeout(() => {
      expect(result).toMatchSnapshot();
      done();
    }, 1000);
  });
});

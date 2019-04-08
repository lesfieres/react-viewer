/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useMappedState } from 'redux-react-hook';
import ShallowRenderer from 'react-test-renderer/shallow';
import PropTypes from 'prop-types';
import { Books } from './Books';
import Item from '../Item/Item';

jest.mock('../Item/Item');

describe('Books component test', () => {
  const renderer = new ShallowRenderer();

  Item.mockImplementation(() => {
    const a = () => '';
    a.propTypes = { item: PropTypes.object.isRequired };

    return a;
  });

  it('renders without items', () => {
    useMappedState.mockImplementation(() => ({
      books: [],
    }));

    renderer.render(<Books classes={{}} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children.length).toEqual(2);
    expect(result.props.children[0].props.id).toEqual('standard-search');
    expect(result.props.children[1]).toEqual(
      <div className="item-list">{[]}</div>,
    );
  });

  it('renders with items', done => {
    useMappedState.mockImplementation(() => ({
      books: [{ id: '1', author: {} }, { id: '2', author: {} }],
    }));

    renderer.render(<Books classes={{}} />);
    const result = renderer.getRenderOutput();

    expect(result.props.children.length).toEqual(2);
    expect(result.props.children[0].props.id).toEqual('standard-search');

    setTimeout(() => {
      expect(result.props.children[1]).toEqual(
        <div className="item-list">
          <Item key="1" item={{ id: '1', author: {} }} />
          <Item key="2" item={{ id: '2', author: {} }} />
        </div>,
      );
      done();
    }, 1000);
  });
});

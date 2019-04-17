/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ItemDisplaySelect from './ItemDisplaySelect';

describe('ItemDisplaySelect component test', () => {
  it('renders without crashing when has the correct props', () => {
    const renderer = new ShallowRenderer();

    const props = {
      displayType: '',
      setCurrentDisplayCardType: () => {},
      classes: {},
    };

    renderer.render(<ItemDisplaySelect {...props} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  const checkCurrentButton = displayType => {
    const renderer = new ShallowRenderer();

    const props = {
      displayType,
      setCurrentDisplayCardType: () => {},
      classes: {},
    };

    renderer.render(<ItemDisplaySelect {...props} />);
    return renderer.getRenderOutput();
  };

  it('marks the List button as checked', () => {
    const result = checkCurrentButton('DISPLAY_CARD_TYPE_LIST');
    expect(result).toMatchSnapshot();
  });

  it('marks the SmallCard button as checked', () => {
    const result = checkCurrentButton('DISPLAY_CARD_TYPE_SMALL_CARD');
    expect(result).toMatchSnapshot();
  });

  it('marks the BigCard button as checked', () => {
    const result = checkCurrentButton('DISPLAY_CARD_TYPE_BIG_CARD');
    expect(result).toMatchSnapshot();
  });
});

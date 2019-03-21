/* eslint-disable prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AppBar from '../AppBar/AppBar';
import App from './App';

jest.mock('../AppBar/AppBar');

describe('App component test', () => {
  beforeAll(() => {
    AppBar.mockImplementation(() => ({ render: () => <div /> }));
  });

  beforeEach(() => {
    AppBar.mockClear();
  });

  it('renders with mocked AppBar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.textContent.indexOf('Les fieres')).toEqual(-1);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

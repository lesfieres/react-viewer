import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import * as actions from './bookActions';
import * as types from './types';

describe('Book actions', () => {
  const axiosMock = new AxiosMockAdapter(axios);

  describe('fetchBooks', () => {
    it('should call the search-book enpdoint with correct parameters and dispatch the result', done => {
      const inputSearch = 'test';
      const expectedAction = {
        type: types.FETCH_BOOKS,
        payload: 'list-of-books',
      };

      const dispatchMock = actionData => {
        expect(actionData).toEqual(expectedAction);
        done();
      };

      axiosMock
        .onGet(
          `http://localhost:8081/search-book?title=%22${inputSearch}%22&from=1&to=3`,
        )
        .reply(200, 'list-of-books');

      actions.fetchBooks(inputSearch, dispatchMock)();
    });
  });
});

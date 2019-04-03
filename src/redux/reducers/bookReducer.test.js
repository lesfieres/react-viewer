import bookReducer from './bookReducer';
import { FETCH_BOOKS } from '../actions/types';

describe('Books reducer', () => {
  it('should return the initial state', () => {
    expect(bookReducer(undefined, {})).toEqual({
      books: [],
    });
  });

  it('should handle FETCH_BOOKS', () => {
    expect(
      bookReducer([], {
        type: FETCH_BOOKS,
        payload: ['book-1', 'book-2'],
      }),
    ).toEqual({
      books: ['book-1', 'book-2'],
    });

    expect(
      bookReducer([], {
        type: FETCH_BOOKS,
        payload: ['book-3', 'book-4'],
      }),
    ).toEqual({
      books: ['book-3', 'book-4'],
    });
  });
});

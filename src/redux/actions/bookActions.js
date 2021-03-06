import axios from 'axios';
import { FETCH_BOOKS } from './types';

const orientExpressBaseUrl = process.env.REACT_APP_ORIENT_EXPRESS_URL;

// eslint-disable-next-line import/prefer-default-export
export const fetchBooks = (inputSearch, dispatch) => () => {
  if (inputSearch === '') {
    dispatch({
      type: FETCH_BOOKS,
      payload: [],
    });
  } else {
    axios
      .get(
        `${orientExpressBaseUrl}/search-book?title=%22${inputSearch}%22&from=1&to=3`,
      )
      .then(res => {
        dispatch({
          type: FETCH_BOOKS,
          payload: res.data,
        });
      });
  }
};

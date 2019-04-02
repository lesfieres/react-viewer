import axios from 'axios';
import { FETCH_BOOKS } from './types';

export const fetchBooks = (inputSearch, dispatch) => () => {
  axios
    .get(
      `http://localhost:8081/search-book?title=%22${inputSearch}%22&from=1&to=3`,
    )
    .then(res => {
      dispatch({
        type: FETCH_BOOKS,
        payload: res.data,
      });
    });
};

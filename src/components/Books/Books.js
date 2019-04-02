import React, { useState, useCallback, useEffect } from 'react'; // eslint-disable-line no-unused-vars, prop-types
import { useDebounce } from 'react-use';
import { useMappedState, useDispatch } from 'redux-react-hook';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from '../Item/Item';
import { fetchBooks } from '../../redux/actions/bookActions';

const styles = {
  searchInput: {
    color: '#fff',
  },
};

const Books = props => {
  const { classes } = props;
  const [inputSearch, setInputSearch] = useState('');
  const [performingSearch, setPerformingSearch] = useState(false);

  const mapState = state => state.books;
  const { books } = useMappedState(mapState);

  const dispatch = useDispatch();
  const fetchBooksCallback = useCallback(fetchBooks(inputSearch, dispatch));
  useDebounce(fetchBooksCallback, 500, [inputSearch]);

  useEffect(() => {
    setPerformingSearch(false);
  }, [books]);

  useEffect(() => {
    setPerformingSearch(true);
  }, [inputSearch]);

  return (
    <React.Fragment>
      <TextField
        id="standard-search"
        label="Search"
        type="search"
        className={classes.searchInput}
        margin="normal"
        fullWidth
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {performingSearch && <CircularProgress className={classes.progress} />}
      <div>
        {!performingSearch
          && books.map(book => <Item key={book.id} item={book} />)}
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Books);

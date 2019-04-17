import React, { useState, useCallback, useEffect } from 'react'; // eslint-disable-line no-unused-vars, prop-types
import { useDebounce } from 'react-use';
import { useMappedState, useDispatch } from 'redux-react-hook';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';
import { fetchBooks } from '../../redux/actions/bookActions';
import ItemDisplaySelect, {
  DisplayCardType,
} from '../ItemDisplaySelect/ItemDisplaySelect';

const styles = {
  searchInput: {
    color: '#fff',
  },
};

export const BooksNoStyled = props => {
  const { classes } = props;
  const [inputSearch, setInputSearch] = useState('');
  const [performingSearch, setPerformingSearch] = useState(false);
  const [currentDisplayCardType, setCurrentDisplayCardType] = useState(
    DisplayCardType.BigCard,
  );

  const mapState = state => state.books;
  const { books } = useMappedState(mapState);

  const dispatch = useDispatch();
  const fetchBooksCallback = useCallback(fetchBooks(inputSearch, dispatch));
  useDebounce(fetchBooksCallback, 500, [inputSearch]);

  useEffect(() => {
    setPerformingSearch(true);
  }, [inputSearch]);

  useEffect(() => {
    setPerformingSearch(false);
  }, [books]);

  const createGridItem = item => {
    switch (currentDisplayCardType) {
      case DisplayCardType.List:
        return (
          <Grid item key={item.id} xs={12}>
            <Item item={item} />
          </Grid>
        );
      case DisplayCardType.SmallCard:
        return (
          <Grid item key={item.id} xs={12} md={4} lg={2}>
            <Item item={item} />
          </Grid>
        );
      case DisplayCardType.BigCard:
      default:
        return (
          <Grid item key={item.id} xs={12} md={6} lg={4}>
            <Item item={item} />
          </Grid>
        );
    }
  };

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
      <ItemDisplaySelect
        displayType={currentDisplayCardType}
        setCurrentDisplayCardType={setCurrentDisplayCardType}
      />
      {performingSearch ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <Grid container spacing={24} className="item-list">
          {!performingSearch && books.map(createGridItem)}
        </Grid>
      )}
    </React.Fragment>
  );
};

const Books = withStyles(styles)(BooksNoStyled);
export default Books;

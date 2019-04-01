import React, { useState } from 'react'; // eslint-disable-line no-unused-vars, prop-types
import { useDebounce } from 'react-use';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Item from '../Item/Item';

const styles = {
  searchInput: {
    width: 200,
  },
};

const Books = (props) => {
  const { classes } = props;
  const [books, setBooks] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:8081/search-book?title=%22${inputSearch}%22&from=1&to=3`,
    );
    setBooks(result.data);
  };

  useDebounce(() => fetchData(), 500, [inputSearch]);

  return (
    <div>
      <h1>Books</h1>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.searchInput}
        margin="normal"
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
      />
      <div>
        {books.map(book => (
          <Item key={book.id} item={book} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Books);

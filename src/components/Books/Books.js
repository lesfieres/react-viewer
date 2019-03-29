import React, { useState } from 'react';
import { useDebounce } from 'react-use';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Item from '../Item/Item';

const Books = () => {
  const [books, setBooks] = useState([]); // TODO -> array state hook?
  const [inputSearch, setInputSearch] = useState('');

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:8081/search-book?title=%22${inputSearch}%22&from=1&to=3`,
    );
    setBooks(result.data);
  };

  useDebounce(
    () => {
      fetchData();
    },
    500,
    [inputSearch],
  );

  const textFieldStyle = {
    width: 200,
  };

  return (
    <div>
      <h1>Books</h1>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        style={textFieldStyle}
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

export default Books;

import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './Search.scss';

const Search = () => {
  return (
    <div className="search">
      <InputBase
        className="search__input"
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search Products' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;

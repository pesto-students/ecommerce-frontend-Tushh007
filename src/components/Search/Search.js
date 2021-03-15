import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './Search.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import FAKEDATA from '../../utils/fakeData';

import { makeStyles } from '@material-ui/core/styles';

const filter = createFilterOptions();
const useStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
});

const products = new Array().concat(
  FAKEDATA['ACCESSORIES'],
  FAKEDATA['FOOTWEAR'],
  FAKEDATA['CASUAL_WEAR'],
  FAKEDATA['PARTY_WEAR']
);

const Search = () => {
  const history = useHistory();
  const [input, setInput] = React.useState('');
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  const searchQuery = (e) => {
    e.preventDefault();
    if (input.length > 0) history.push('/category/party%20wear');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchQuery(e);
    }
  };

  return (
    <div className="search">
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              name: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              name: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              name: `Search "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="user-search"
        options={products}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.name;
        }}
        renderOption={(option) => option.name}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <form className="search__bar">
            <TextField
              value={input}
              onChange={(e) => setInput(e.target.value)}
              {...params}
              label="Search products"
              variant="standard"
              className="search__input"
              onKeyDown={(e) => handleKeyDown(e)}
              // InputProps={{ classes }}
              // InputProps={{
              //   endAdornment: (
              //     <IconButton type="submit" aria-label="search">
              //       <SearchIcon onClick={search} />
              //     </IconButton>
              //   ),
              // }}
            />

            <IconButton type="submit" aria-label="search">
              <SearchIcon onClick={searchQuery} />
            </IconButton>
          </form>
        )}
      />
    </div>
  );
};

export default Search;

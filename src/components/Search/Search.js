import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './Search.scss';
import translate from '../../utils/i18n/translate';
import { useIntl } from 'react-intl';

const Search = () => {
  const intl = useIntl();
  return (
    <div className="search">
      <InputBase
        className="search__input"
        placeholder={intl.formatMessage({ id: 'Search Products' })}
        inputProps={{ 'aria-label': 'search Products' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;

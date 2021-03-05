import React, { useState } from 'react';
import { useStateValue } from '../../store/StoreProvider';
import IconButton from '@material-ui/core/IconButton';
import Search from '../Search/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import './Navbar.scss';
import translate from '../../utils/i18n/translate';
import LanguageIcon from '@material-ui/icons/Language';
import { LOCALES } from '../../utils/i18n';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [{ locale }, dispatch] = useStateValue();

  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  // Profile Menu
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuclick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const menuId = 'desktopProfileMenu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>
        {translator('Login')}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        {translator('Account')}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>
        {translator('Orders')}
      </MenuItem>
    </Menu>
  );

  // Language Menu
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  const isLanguageMenuOpen = Boolean(languageAnchorEl);

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = (locale) => {
    dispatch({
      type: 'SET_LOCALE',
      locale: locale,
    });
    setLanguageAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLanguageMenuclick = (e) => {
    setLanguageAnchorEl(e.currentTarget);
  };

  const languageId = 'languageMenu';
  const renderLanguageMenu = (
    <Menu
      anchorEl={languageAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={languageId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isLanguageMenuOpen}
      onClose={handleLanguageMenuClose}
    >
      <MenuItem onClick={() => handleLanguageMenuClose(LOCALES.ENGLISH)}>
        {translator('English')}
      </MenuItem>
      <MenuItem onClick={() => handleLanguageMenuClose(LOCALES.GERMAN)}>
        {translator('German')}
      </MenuItem>
      <MenuItem onClick={() => handleLanguageMenuClose(LOCALES.FRENCH)}>
        {translator('French')}
      </MenuItem>
    </Menu>
  );

  // Mobile Menu
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'mobileProfileMenu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications">
          <Badge badgeContent={0} color="secondary">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Wishlist</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-controls={menuId} aria-haspopup="true">
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/">
        <h2 className="navbarLogo">Little Tags</h2>
        <h2 className="navbarMobileLogo">LT</h2>
      </Link>

      <div className="navbar__right">
        <Search />
        <div className="navbar__desktopMenu">
          <IconButton
            aria-controls={languageId}
            aria-haspopup="true"
            onClick={handleLanguageMenuclick}
          >
            <LanguageIcon />
          </IconButton>

          <IconButton
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuclick}
          >
            <PersonOutlineOutlinedIcon />
          </IconButton>

          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </div>

        <div className="navbar__mobileMenu">
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {renderLanguageMenu}
      {renderMenu}
      {renderMobileMenu}
    </nav>
  );
};

export default Navbar;

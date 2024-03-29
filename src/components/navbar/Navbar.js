import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Search from '../Search/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import Login from '../Login/Login';
import './Navbar.scss';
import translate from '../../utils/i18n/translate';
import { useStateValue } from '../../store/StoreProvider';

import Tooltip from '@material-ui/core/Tooltip';
import LanguageIcon from '@material-ui/icons/Language';
import { LOCALES } from '../../utils/i18n';

import { auth } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ user, cart, wishlist }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Language Menu
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);

  const isLanguageMenuOpen = Boolean(languageAnchorEl);

  const translator = (item) =>
    translate(item) === item ? item : translate(item);

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

  // Language Icon Logic
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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLogoutClick = () => {
    handleAuthentication();
    setAnchorEl(null);
    handleMobileMenuClose();
    setOpen(true);
  };

  const handleDesktopProfileMenuclick = (e) => {
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
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Order History</MenuItem>
      <MenuItem onClick={handleLogoutClick}>Sign Out</MenuItem>
    </Menu>
  );

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
        <h2 className="navbarLogo">TagiFy</h2>
        <h2 className="navbarMobileLogo">TF</h2>
      </Link>

      <div className="navbar_right">
        <Search className="search__input" />
        <div className="navbar_desktopMenu">
          {user ? (
            <>
              <span className="navbar__username">Hello, {user.email}</span>
              <Tooltip title="Profile" aria-label="Profile">
                <IconButton
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleDesktopProfileMenuclick}
                >
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </>
          ) : (
            <>
              <span className="navbar__username">
                {translator('Hello, Guest')}
              </span>

              <Tooltip title="Login" aria-label="Login">
                <Login />
              </Tooltip>
            </>
          )}

          <Tooltip title="Language" aria-label="Language">
            <IconButton
              aria-controls={languageId}
              aria-haspopup="true"
              onClick={handleLanguageMenuclick}
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>

          {user ? (
            <Link to="/wishlist">
              <Tooltip title="Favourite" aria-label="Favourite">
                <IconButton className={classes.root}>
                  <Badge badgeContent={wishlist.length} color="secondary">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
          ) : (
            <></>
          )}
          <Link to="/cart">
            <Tooltip title="Cart" aria-label="Cart">
              <IconButton className={classes.root}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Link>
        </div>

        <div className="navbar_mobileMenu">
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
      {renderMenu}
      {renderMobileMenu}
      {renderLanguageMenu}
    </nav>
  );
};

export default Navbar;

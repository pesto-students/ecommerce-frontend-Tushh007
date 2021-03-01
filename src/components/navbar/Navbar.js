import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleDesktopProfileMenuclick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

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
      <MenuItem onClick={handleMenuClose}>{translator('Login')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{translator('Account')}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{translator('Orders')}</MenuItem>
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
      <h2 className="navbarLogo">Little Tags</h2>
      <h2 className="navbarMobileLogo">LT</h2>
      <div className="navbar_right">
        <Search />
        <div className="navbar_desktopMenu">
          <IconButton>
            <LanguageIcon />
          </IconButton>
          <IconButton
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleDesktopProfileMenuclick}
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
    </nav>
  );
};

export default Navbar;

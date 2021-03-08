import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import { Link, useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import translate from '../../utils/i18n/translate';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="login">
      <div className="login__icon">
        <IconButton onClick={handleClickOpen}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <h1 className="login__logo">Little Tags</h1>

        <div className="login__card">
          <div className="login__container">
            <h1>{translator('Sign-in')}</h1>
            <form>
              <h5>{translator('E-mail')}</h5>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <h5>{translator('Password')}</h5>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" onClick={signIn} className="login__email">
                {translator('Sign-in')}
              </button>
            </form>
            <button onClick={register} className="login__register">
              {translator('Create your account')}
            </button>
          </div>
          <p>{translator('or sign-in with:')}</p>
          <div className="login__options">
            <button
              type="submit"
              onClick={signIn}
              className="login__google btn"
            >
              <EmailIcon />
              {translator('Google')}
            </button>
            <button
              type="submit"
              onClick={signIn}
              className="login__facebook btn"
            >
              <FacebookIcon />
              {translator('Facebook')}
            </button>
            <button type="submit" onClick={signIn} className="login__phone btn">
              <PhoneIcon />
              {translator('Phone')}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Login;

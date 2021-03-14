import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import GoogleIcon from '../../assets/img/icons/google.svg';
import FacebookButton from '../../assets/img/icons/facebook.svg';

import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../utils/firebase';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

import './Login.scss';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#202124',
    color: '#fff',
    borderRadius: '2px',
    marginTop: '10px',
    marginBottom: '50px',
    padding: '10px 50px',
    '&:hover': {
      backgroundColor: '#F15A24',
    },
  },
  label: {
    fontSize: '0.8rem',
  },
})(Button);

const StyledDialog = withStyles({
  root: {
    textAlign: 'center',
    borderRadius: '0px;',
    '& .MuiDialog-paper': {
      borderRadius: '0px',
    },
  },
})(Dialog);

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#202124',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#202124',
        borderRadius: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#202124',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#202124',
      },
    },
  },
})(TextField);

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
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
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <h2>Login</h2>
        </DialogTitle>
        <p>Please Login to Proceed</p>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <StyledTextField
            autoFocus
            margin="normal"
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <StyledTextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <StyledButton onClick={signIn}>Login</StyledButton>
          <StyledButton onClick={register}>Register</StyledButton>
          <hr />
          <div className="SocialLogin">
            <button className="GoogleButton">
              <img src={GoogleIcon} alt="Google Icon" /> Sign up with Google
            </button>
            <button className="FacebookButton">
              <img src={FacebookButton} alt="Facebook Icon" />
              Sign up with Facebook
            </button>
          </div>
          <div className="NotRegistered">
            <button className="NotRegisteredButton">
              Not registered yet? <br /> Sign Up
            </button>
          </div>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default Login;

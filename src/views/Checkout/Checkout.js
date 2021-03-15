import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './Checkout.scss';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../store/StoreProvider';
import { getCartTotal } from '../../store/reducer';

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

const Checkout = () => {
  const history = useHistory();
  const [{ user, cart }, dispatch] = useStateValue();
  const [value, setValue] = React.useState('female');

  const defaultFormDate = {
    name: '',
    lastName: '',
    streetName: '',
    house: '',
    city: '',
    country: '',
    pincode: '',
    phone: '',
  };

  const [formData, setFormData] = React.useState({ ...defaultFormDate });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    dispatch({
      type: 'SET_USER_DETAILS',
      userDetails: formData,
    });
    history.push('/order');
  };

  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <h2 className="chckoutTitle">Details</h2>
        {!user ? (
          <div className="checkoutLoginBtn">
            <button>Login to Your Account</button>
          </div>
        ) : (
          <></>
        )}

        <div className="checkoutForm">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="name"
                name="name"
                label="name"
                type="text"
                variant="outlined"
                name="name"
                onChange={handleFormChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="lastName"
                name="lastName"
                label="last name"
                type="text"
                name="lastName"
                onChange={handleFormChange}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="streetName"
                label="street name"
                type="text"
                name="streetName"
                onChange={handleFormChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="house"
                label="House /Appartment"
                type="text"
                name="house"
                onChange={handleFormChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <StyledTextField
                margin="normal"
                id="city"
                label="City"
                type="text"
                name="city"
                onChange={handleFormChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={6}>
              <StyledTextField
                margin="normal"
                id="country"
                label="Country"
                type="text"
                name="country"
                onChange={handleFormChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="pinCode"
                label="pincode"
                type="text"
                name="pincode"
                onChange={handleFormChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <StyledTextField
                margin="normal"
                id="phone"
                label="phone"
                type="text"
                variant="outlined"
                name="phone"
                onChange={handleFormChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
        <div className="paymentMethod">
          <h2 className="paymentTitle">Payment Method</h2>
          <div className="paymentRadio">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Payment Method"
                name="paymentMethod"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="payNow"
                  control={<Radio />}
                  label="Pay Now"
                />
                <FormControlLabel
                  value="cashOnDelivey"
                  control={<Radio />}
                  label="Cash On Delivery"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="paymentBtn">
            <button onClick={(e) => handlePayment(e)}>
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
      <div className="checkoutRight">
        <div className="productSummary">
          <h3>Product Summary</h3>
          <div className="summarydata">
            <div className="summartTitle">Products</div>
            <div className="summartValue">{cart.length}</div>
          </div>
          <div className="summarydata">
            <div className="summartTitle">Subtotal</div>
            <div className="summartValue">₹ {getCartTotal(cart)}</div>
          </div>
          <div className="summarydata">
            <div className="summartTitle">Tax (18%) </div>
            <div className="summartValue">
              ₹ {Math.ceil(getCartTotal(cart) * 0.18)}
            </div>
          </div>
          <div className="summarydata">
            <div className="summartTitle">Shipping (₹250)</div>
            <div className="summartValue">₹ 250.00</div>
          </div>
          <hr /> <br />
          <div className="summarydata">
            <div className="summartTitle">Total</div>
            <div className="summartValue">
              ₹ {getCartTotal(cart) + getCartTotal(cart) * 0.18 + 250}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

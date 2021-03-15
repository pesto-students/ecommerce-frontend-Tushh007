import React, { useEffect } from 'react';
import './CartTotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../store/StoreProvider';
import { getCartTotal } from '../../store/reducer';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    backgroundColor: '#202124',
    color: '#fff',
    borderRadius: '2px',
    marginTop: '10px',
    marginBottom: '50px',
    padding: '10px 50px',
    '&:hover': {
      backgroundColor: '#202124',
    },
  },
  label: {
    fontSize: '0.8rem',
  },
})(Button);

function CartTotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  useEffect(() => {
    console.log(getCartTotal());
  }, [cart]);

  return (
    <div className="cartTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/**Figure this out */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Figure this out
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <StyledButton onClick={(e) => history.push('/cart')}>
        Proceed to Checkout
      </StyledButton>
    </div>
  );
}

export default CartTotal;

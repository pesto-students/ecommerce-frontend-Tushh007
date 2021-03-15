import React from 'react';
import './CartProduct.scss';
import { useStateValue } from '../../store/StoreProvider';
import ProductRating from '../ProductRating/ProductRating';
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

function CartProduct({
  id,
  name,
  price,
  category,
  rating,
  imageUrl,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={imageUrl} />
      <div className="cartProduct__info">
        <p className="cartProduct__title">Title: {name}</p>
        <p className="cartProduct__price">
          <strong>₹ {price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <ProductRating rating={rating} />
        </div>

        {!hideButton && (
          <StyledButton onClick={removeFromCart}>
            Remove from basket
          </StyledButton>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
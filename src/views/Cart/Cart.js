import React, { useEffect } from 'react';
import './Cart.scss';
import { useStateValue } from '../../store/StoreProvider';
import userEvent from '@testing-library/user-event';
import CartTotal from '../../components/CartTotal/CartTotal';
import CartProduct from '../../components/CartProduct/CartProduct';

function Cart() {
  const [{ cart, user }, dispatch] = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Hello, {user ? user.email : 'Guest'}</h3>
          <h2 className="cart__title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CartProduct
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              rating={item.rating}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className="cart__right">
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;

import store from 'app/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeatute.propTypes = {};

function CartFeatute(props) {
  const countTotal = useSelector(cartTotalSelector);

  const state = store.getState();

  return (
    <div>
      <p>Total: {countTotal}</p>
      {state.cart.cartItems.map((item) => (
        <p> {item.quantity} </p>
      ))}
    </div>
  );
}

export default CartFeatute;

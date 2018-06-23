import React from 'react';
import classes from './Cart.css';

const cart = (props) => {
  return (
    <div className={classes.Cart}>
      <div>
        <h4>Your Cart</h4>
      </div>
      <div>
        <ul>
          <li>cart #1</li>
          <li>cart #2</li>
        </ul>
      </div>
    </div>
  )
}

export default cart;

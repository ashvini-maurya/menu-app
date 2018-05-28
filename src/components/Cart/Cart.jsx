import React from 'react';
import './Cart.css';

const cart = (props) => {
  return (
    <div className="cart-section">
      <div className="your-cart">
        <h4>Your Cart</h4>
      </div>
      <div className="cart">
        <ul className="item">
          <li>cart #1</li>
          <li>cart #2</li>
        </ul>
      </div>
    </div>
  )
}

export default cart;

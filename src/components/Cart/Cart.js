import React from 'react';
import classes from './Cart.css';

const cart = (props) => {
  // console.log(props.selectedOrderItem)
  return (
    <div className={classes.Cart}>
      <div className={classes.CartHeading}>
        <h4>Your Cart</h4>
      </div>
      <ul>
        <li>
          {props.selectedOrderItem}
        </li>
      </ul>
      {/* <div>
        <div className={classes.CartItems}>
          <div>{props.selectedItems.cart1.name}</div>
          <div>{props.selectedItems.cart1.price}</div>
          <div className={classes.ItemCount}>{props.selectedItems.cart1.count}</div>
        </div>
        <br />
        <div className={classes.CartItems}>
          <div>{props.selectedItems.cart2.name}</div>
          <div>{props.selectedItems.cart2.price}</div>
          <div className={classes.ItemCount}>{props.selectedItems.cart2.count}</div>
        </div>
      </div> */}
    </div>
  )
}

export default cart;

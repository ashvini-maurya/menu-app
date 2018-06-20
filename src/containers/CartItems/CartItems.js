import React, { Component } from 'react';
import Cart from '../../components/Cart/Cart';

class CartItems extends Component {
  state = {
    cart1: {
      name: "ChockolateMilkShake",
      price: 109,
      count: 2
    },
    cart2: {
      name: "ChockolateMilkShake2",
      price: 209,
      count: 4
    }
  }

  render() {
    return (
      <Cart selectedItems={this.state} />
    )
  }

}

export default CartItems;

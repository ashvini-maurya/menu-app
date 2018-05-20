import React, { Component } from 'react';
import './App.css';

import Category from './components/category';


const menus = [
  {
    "availabletime": "11:00-15:30",
    "category": "Chinese Combos",
    "description": "",
    "name": "Egg Chinese Combo",
    "price": 100,
    "vegflag": "nonveg"
  },
  {
    "availabletime": "00:00-23:59",
    "category": "Chinese Starter",
    "description": "",
    "name": "Indonesian  Nasi Goreng Tofu",
    "price": 120,
    "vegflag": "veg"
  },
  {
    "availabletime": "12:00-16:00",
    "category": "Salads",
    "description": "",
    "name": "Veg Salad",
    "price": 80,
    "vegflag": "veg"
  },
  {
    "availabletime": "10:00-20:00",
    "category": "Oriental",
    "description": "Chilli Garlic Potatoes",
    "name": "Veg Starter",
    "price": 55,
    "vegflag": "veg"
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="category">
          <div className="category-heading">
            All
          </div>
          {
            menus.map((menu, index) => {
              return <Category
                category={menu.category}
                key={index} />
            })
          }
        </div>
        <div className="details" style={{ width: "60%" }}>Details</div>
        <div className="cart" style={{ width: "30%" }}>Cart</div>
      </div>
    );
  }
}

export default App;

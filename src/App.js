import React, { Component } from 'react';
import './App.css';

import Category from './components/category';

import axios from 'axios';


class App extends Component {
  state = {
    menus: [],
    uniqueCategory: []
  };

  componentDidMount() {
    axios
      .get("https://thesmartq.firebaseio.com/menu.json")
      .then(response => {
        const newMenus = response.data.map(m => {
          return {
            availabletime: m.availabletime,
            category: m.category,
            description: m.description,
            name: m.name,
            price: m.price,
            vegflag: m.vegflag
          };
        });

        const newState = Object.assign({}, this.state, {
          menus: newMenus
        });
        this.setState(newState);

        const uniqueCategorys = [];
        this.state.menus.map(cat => {
          if (uniqueCategorys.indexOf(cat.category) === -1) {
            uniqueCategorys.push(cat.category)
          }
        });

        const newState2 = Object.assign({}, this.state, {
          uniqueCategory: uniqueCategorys
        });

        this.setState(newState2);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div className="category">
          <div className="category-heading">
            All
          </div>
          {
            this.state.uniqueCategory.map((x, index) => {
              return <Category
                category={x}
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

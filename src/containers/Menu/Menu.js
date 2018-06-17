import React, { Component } from 'react';
import axios from 'axios';
import classes from './Menu.css';

import Aux from '../../hoc/Aux/Aux';

import Header from '../../components/Header/Header';
import Modal from '../../components/UI/Modal/Modal';
import Cart from '../../components/Cart/Cart';
import Category from '../../components/Category/Category';
import Detail from '../../components/Detail/Detail';
import Login from '../../components/Login/Login';

class Menu extends Component {
  state = {
    menus: [],
    uniqueCategory: [],
    itemCount: 0,
    loggedIn: false
  };

  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1h7fk2")
      .then(response => {
        console.log("resopnse: ", response);
        const newMenus = response.data.map(m => {
          return {
            name: m.name,
            price: m.price,
            image: m.image,
            category: m.category,
            description: m.description,
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

  loggedInHandler = () => {
    this.setState({ loggedIn: true });
  }

  loginCancelHandler = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <Aux>
        <div className={classes.HeaderBar}>
          <Header />
          <button onClick={this.loggedInHandler}>LOGIN</button>
        </div>
        <Modal show={this.state.loggedIn} modalClosed={this.loginCancelHandler}>
          <Login />
        </Modal>

        <div className={classes.Menu}>
          <div className={classes.Category}>
            <div className={classes.CategoryHeading}>
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

          <div style={{ width: "60%" }}>
            <div className={classes.DetailContainer}>
              <Detail menus={this.state.menus} />
            </div>
          </div>

          <Cart className="cart" />
        </div>
      </Aux>
    );
  }
}

export default Menu;

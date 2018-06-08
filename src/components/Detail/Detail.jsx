import React, { Component } from 'react';
import classes from './Detail.css';


class Detail extends Component {
  render() {
    const menuData = [...this.props.menus];
    // console.log(menuData);

    const categorizedData = menuData
      .map(menu => menu)
      .reduce((categories, menu) => {
        // console.log("Hello", menu)
        categories[menu.category] = categories[menu.category] || []
        categories[menu.category].push({
          description: menu.description,
          image: menu.image,
          name: menu.name,
          price: menu.price,
          vegflag: menu.vegflag,
        })
        return categories
      }, [])

    console.log(categorizedData);

    return this.props.menus.map((m, index) => (
      <div key={index} className={classes.MenuItem}>
        <div className={classes.MenuItemContainer}>
          <div>
            <img src={m.image} alt={m.name} className={classes.MenuImage} />
          </div>
          <span>
            <h6 style={{ "float": "left" }}>{m.name}</h6>
            <h6 style={{ "float": "right" }}>{m.price}</h6>
          </span>
        </div>
      </div>
    ));
  }
}

export default Detail;

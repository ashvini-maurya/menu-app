import React, { Component } from 'react';
import classes from './Detail.css';

class Detail extends Component {
  render() {
    const menuData = [...this.props.menus];
    const categorizedData = menuData
      .reduce((categories, menu) => {
        categories[menu.category] = categories[menu.category] || []
        categories[menu.category].push({
          description: menu.description,
          image: menu.image,
          name: menu.name,
          price: menu.price,
          vegflag: menu.vegflag,
        })
        return categories
      }, {})

    let selectedCategory = {};
    if (this.props.selectedCategory !== 'ALL') {
      selectedCategory[this.props.selectedCategory] = categorizedData[this.props.selectedCategory]
    } else {
      selectedCategory = categorizedData;
    }

    return (Object.keys(selectedCategory).map((key, index) => (
      <div key={index}>
        <h2 className={classes.ItemCategory} >{key.toUpperCase()}</h2>
        <div className={classes.Items}>
          {selectedCategory[key].map((key2, index) => (
            <div key={index} className={classes.MenuItem} onClick={this.props.selectOrderItem}>
              <div className={classes.MenuItemContainer}>
                <img src={key2.image} alt={key2.name} className={classes.MenuImage} />
              </div>
              <span>
                <h6 style={{ "float": "left" }}>{key2.name}</h6>
                <h6 style={{ "float": "right" }}>{key2.price}</h6>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
    ))
  }
}

export default Detail;

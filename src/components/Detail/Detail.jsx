import React from 'react';
import classes from './Detail.css';

const detail = (props) => {
  // console.log([props])

  // const ChineseCombos = this.state.menus.filter((cate) => cate.category === "Chinese Combos");
  // console.log(ChineseCombos);

  return (
    <div>
      <div className={classes.CategoryName}>
        <h4>{props.uniquecategory}</h4>
      </div>

      <span>{props.name}</span>
      
      <span className={classes.CountAndPrice}>
        <button onClick={props.itemRemoved}>-</button>
          <span className={classes.Count}>{props.itemCount}</span>
        <button onClick={props.itemAdded}>+</button>
        <span className={classes.Price}>${props.price}</span>
      </span>
      <p className={classes.Description}>{props.description}</p>
      <hr/>
    </div>
  )
}

export default detail;

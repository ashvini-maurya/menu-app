import React from 'react';
import classes from './Detail.css';

const detail = (props) => {
  console.log(props)

  return (
    <div className={classes.MenuItem}>
      <div className={classes.MenuItemContainer}>
        <div>
          <img src={props.image} alt={props.name} className={classes.MenuImage} />
        </div>
        <span>
          <h6 style={{ "float": "left" }}>{props.name}</h6>
          <h6 style={{ "float": "right" }}>{props.price}</h6>
        </span>
      </div>
    </div>
  )
}

export default detail;

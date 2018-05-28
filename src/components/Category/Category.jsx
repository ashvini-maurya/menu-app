import React from 'react';
import classes from './Category.css';

const category = (props) => {
  return (
    <div>
      <ul className={classes.Item}>
        <li>{props.category}</li>
      </ul>
    </div>

  )
}

export default category;

import React from 'react';
import classes from './Category.css';

import Aux from '../../hoc/Aux/Aux';

const category = (props) => {
  return (
    <Aux>
      <ul className={classes.Item}>
        <li>{props.category}</li>
      </ul>
    </Aux>

  )
}

export default category;

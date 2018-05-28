import React from 'react';
import './Category.css';

const category = (props) => {
  return (
    <div>
      <div className="category">
        <ul className="item">
          <li>{props.category}</li>
        </ul>
      </div>
    </div>


  )
}

export default category;

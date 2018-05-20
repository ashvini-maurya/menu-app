import React from 'react';
import './category.css';

const Category = (props) => {
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

export default Category;

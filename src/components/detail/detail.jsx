import React from 'react';
import './detail.css';

const Detail = (props) => {
  // console.log([props])

  // const ChineseCombos = this.state.menus.filter((cate) => cate.category === "Chinese Combos");
  // console.log(ChineseCombos);

  return (
    <div>
      <div className="category-name">
        <h4>{props.uniquecategory}</h4>
      </div>

      <span>{props.name}</span>
      
      <span className="count-and-price">
        <button onClick={props.itemRemoved}>-</button>
          <span className="count">{props.itemCount}</span>
        <button onClick={props.itemAdded}>+</button>
        <span className="price">${props.price}</span>
      </span>
      <p className="description">{props.description}</p>
      <hr/>
    </div>
  )
}

export default Detail;

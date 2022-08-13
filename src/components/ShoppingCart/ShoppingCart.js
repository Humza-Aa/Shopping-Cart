import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  let item = []
  return (
    <div className="shoppingList">
      <div className="listInfo">
        {props.shoppingList.map((itemIndex) => {  
          
          if (!item.includes(itemIndex)) {
            item.push(itemIndex);
            return (
            <div className="item-Info">
              <div className="img">
                <img src={props.itemNames[itemIndex].imgSrc} alt="" />
              </div>
              <div className="details">
                <div className="name">
                  <h3>{props.itemNames[itemIndex].name}</h3>
                </div>
                <div className="price">${props.itemNames[itemIndex].price}</div>
                <div className="quantity">Quantity: {props.itemQuantity[itemIndex]}</div>
              </div>
            </div>
            )
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;

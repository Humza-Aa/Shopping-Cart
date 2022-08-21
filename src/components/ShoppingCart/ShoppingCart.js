import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  return (
    <div className="shoppingList">
      <div className="listInfo">
        {props.dbItemQuantity.map((itemInfo) => {
          if (itemInfo.id == props.currentUser.email) {
            return Object.keys(itemInfo.itemQ).map((key) => {
              let value = itemInfo.itemQ[key];
              if (value !== 0) {
                return (
                  <div className="item-Info" key={key}>
                    <div className="img">
                      <img src={props.itemNames[key].imgSrc} alt="" />
                    </div>
                    <div className="details">
                      <div className="name">
                        <h3>{props.itemNames[key].name}</h3>
                      </div>
                      <div className="price">${props.itemNames[key].price}</div>
                      <div className="quantity">Quantity: {value}</div>
                    </div>
                  </div>
                );
              }
            });
          }
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;

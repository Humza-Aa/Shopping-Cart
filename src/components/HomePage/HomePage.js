import React from "react";
import "./HomePage.css";

const HomePage = (itemlist) => {
  
  return (
    <div className="homePage">
      {itemlist.itemNames.map((item) => {
        return (
          <div key={item.key} className="itemCard">
            <div className="imgDiv">
              <img
                src= {item.imgSrc}
                alt="Item"
                data-testid="itemImage"
              />
            </div>
            <div className="infoDiv">
              <div className="nameDiv">
                <p data-testid='itemName'>{item.name}</p>
              </div>
              <div className="priceDiv">
                <p>${item.price}</p>
              </div>
              <div className="addCartBtnDiv">
                <button data-testid="button" onClick={(e) => {itemlist.addItem(item.key)}}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;

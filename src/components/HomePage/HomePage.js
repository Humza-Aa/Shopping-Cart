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
              />
            </div>
            <div className="infoDiv">
              <div className="nameDiv">
                <p>{item.name}</p>
              </div>
              <div className="priceDiv">
                <p>${item.price}</p>
              </div>
              <div className="addCartBtnDiv">
                <button onClick={(e) => {itemlist.addItem(item.key)}}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;

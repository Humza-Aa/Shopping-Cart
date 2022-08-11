import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "../NavBar/NavBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";

const RouteSwitch = () => {
  const [shoppingList, setshoppingList] = useState([]);

  const addItem = (itemIndex) => {
    setshoppingList([...shoppingList, itemIndex]);
  };

  const [itemNames] = useState([
    {
      name: "Dell Inspiron 3000 15.6 Touchscreen Laptop - Black",
      imgSrc:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15972/15972303.jpg",
      price: 600,
      key: 0,
    },
    {
      name: "HP 15.6 Laptop - Jet Black",
      imgSrc: "https://m.media-amazon.com/images/I/71yZp-Ru4WL._AC_SX679_.jpg",
      price: 550,
      key: 1,
    },
    {
      name: "Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone",
      imgSrc: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
      price: 430,
      key: 2,
    },
    {
      name: "Acer Nitro 5 15.6 Gaming Laptop - Black",
      imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-36ZG-XQuCNUEkc5XItH25qxrkSkPY4Kfg&usqp=CAU",
      price: 850,
      key: 3,
    },
    {
      name: "ASUS ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
      key: 4,
    },
    {
      name: "Acer ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
      key: 5,
    },
  ]);

  return (
    <BrowserRouter>
      <NavBar shoppingList={shoppingList} setshoppingList={setshoppingList}/>
      <Routes>
        <Route path="/" element={<HomePage itemNames={itemNames} addItem={addItem}/>} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "../NavBar/NavBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

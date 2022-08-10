import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navBar.css";

const NavBar = () => {
    return(
        <div className="navBar">
            <h3>GetBOK</h3>
            <div className="links">
                <Link to="/">HomePage</Link>
                <Link to="shoppingcart">Shopping Cart</Link>
            </div>
        </div>
    )
}

export default NavBar;

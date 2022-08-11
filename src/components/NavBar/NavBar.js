import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navBar.css";

const NavBar = (props) => {
    return(
        <div className="navBar">
            <h3>GetBOK</h3>
            <div className="links">
                <Link to="/">HomePage</Link>
                <Link to="shoppingcart">Shopping Cart</Link>
                <div className="numOfItems">
                    <Link to="shoppingcart">
                        {props.shoppingList.length}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

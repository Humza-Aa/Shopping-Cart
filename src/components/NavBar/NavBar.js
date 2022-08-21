import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navBar.css";
import {
  signInWithGoogle,
  signOutFromGoogle,
} from "../../firebase-config.js";


const NavBar = (props) => {


  let displayName = "";
  if (props.currentUser) {
    displayName = props.currentUser.displayName;
  } else {
    displayName = "";
  }

  return (
    <div className="navBar">
      <h3>GetBOK</h3>
      <div className="links">
        <Link to="/">HomePage</Link>
        <Link to="shoppingcart">Shopping Cart</Link>
        <div className="numOfItems">
          <Link to="shoppingcart">{props.shoppingList.length}</Link>
        </div>
        <div className="loginButton">
          <p>{displayName}</p>
          <button onClick={signInWithGoogle}>Login</button>
          <button onClick={signOutFromGoogle}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

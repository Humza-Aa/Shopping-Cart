import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "../NavBar/NavBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
import { doc, updateDoc, onSnapshot, collection } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const RouteSwitch = () => {
  const [shoppingList, setshoppingList] = useState([]);
  const [itemQuantity, setitemQuantity] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const [itemNames] = useState([
    {
      name: "Dell Inspiron 3000 15.6 Touchscreen Laptop - Black",
      imgSrc:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15972/15972303.jpg",
      price: 600,
      key: 0,
      quantity: 0,
    },
    {
      name: "HP 15.6 Laptop - Jet Black",
      imgSrc: "https://m.media-amazon.com/images/I/71yZp-Ru4WL._AC_SX679_.jpg",
      price: 550,
      key: 1,
      quantity: 0,
    },
    {
      name: "Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone",
      imgSrc: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
      price: 430,
      key: 2,
      quantity: 0,
    },
    {
      name: "Acer Nitro 5 15.6 Gaming Laptop - Black",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-36ZG-XQuCNUEkc5XItH25qxrkSkPY4Kfg&usqp=CAU",
      price: 850,
      key: 3,
      quantity: 0,
    },
    {
      name: "ASUS ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
      key: 4,
      quantity: 0,
    },
    {
      name: "Acer ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
      key: 5,
      quantity: 0,
    },
  ]);

  const [currentUser, setCurrentUser] = useState({});
  const [dbItemQuantity, setDbItemQuantity] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(
    () =>
      onSnapshot(collection(db, "itemQuantities"), (snapshot) =>
        setDbItemQuantity(
          snapshot.docs.map((doc) => ({ itemQ: {...doc.data()}, id: doc.id }))
        )
      ),
    []
  );

  const addItem = (itemIndex) => {
    setshoppingList([...shoppingList, itemIndex]);
    setitemQuantity({
      ...itemQuantity,
      [itemIndex]: itemQuantity[itemIndex] + 1,
    });
  };

  const saveData = async (itemIndex) => {
    console.log(currentUser.displayName);
    const docRef = doc(db, "itemQuantities", currentUser.userName);
    // const payLoad = itemQ;
    // await setDoc(docRef, payLoad);
    await updateDoc(docRef, {
      [itemIndex]: itemQuantity[itemIndex] + 1,
    });
  };

  return (
    <BrowserRouter>
      <NavBar
        shoppingList={shoppingList}
        setshoppingList={setshoppingList}
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage itemNames={itemNames} addItem={addItem} />}
        />
        <Route
          path="/shoppingcart"
          element={
            <ShoppingCart
              itemNames={itemNames}
              shoppingList={shoppingList}
              itemQuantity={itemQuantity}
              dbItemQuantity={dbItemQuantity}
              currentUser={currentUser}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

import "./HomePage.css";

const HomePage = () => {
  const itemNames = [
    {
      name: "Dell Inspiron 3000 15.6 Touchscreen Laptop - Black",
      imgSrc:
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15972/15972303.jpg",
      price: 600,
    },
    {
      name: "HP 15.6 Laptop - Jet Black",
      imgSrc: "https://m.media-amazon.com/images/I/71yZp-Ru4WL._AC_SX679_.jpg",
      price: 550,
    },
    {
      name: "Microsoft Surface Laptop Go 12.4 Multi-Touch, Sand Stone",
      imgSrc: "https://m.media-amazon.com/images/I/61VcLC0G13L._AC_SL1500_.jpg",
      price: 430,
    },
    {
      name: "Acer Nitro 5 15.6 Gaming Laptop - Black",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-36ZG-XQuCNUEkc5XItH25qxrkSkPY4Kfg&usqp=CAU",
      price: 850,
    },
    {
      name: "ASUS ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
    },
    {
      name: "Acer ROG Strix G15 15.6 Gaming Laptop",
      imgSrc: "https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg",
      price: 1200,
    },
  ];
  return (
    <div className="homePage">
      {itemNames.map((item) => {
        return (
          <div className="itemCard">
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
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="itemCard">
        <div className="imgDiv">
            <img src="https://m.media-amazon.com/images/I/71ZTl79+18L._AC_SX569_.jpg" alt="Item Image" />
        </div>
        <div className="infoDiv">
            <div className="nameDiv">
                <p>ASUS ROG Strix G15 15.6 Gaming Laptop</p>
            </div>
            <div className="priceDiv">
                <p>$600</p>
            </div>
            <div className="addCartBtnDiv">
                <button>Add to Cart</button>
            </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;

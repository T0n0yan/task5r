import React, { useState } from "react";
import "./style.scss";
import { dataShop } from "./../shopdata";
import { Link } from "react-router-dom";
import ShopCategories from "./ShopCategories/index";
import { useDispatch } from "react-redux";

const ShopItemContainer = () => {
  const dispatch = useDispatch();

  const [magazineCount, setMagazineCount] = useState(1);

  const addItemsToMagazine = () => {
    setMagazineCount(magazineCount + 1);
    dispatch({ type: "magazine", payload: magazineCount });
  };

  const [liked, setLiked] = useState(1);
  const addLikdeItemToStore = () => {
    setLiked(liked + 1);
    dispatch({ type: "first", payload: liked });
  };

  const categoryList = [
    {
      title: "Gender",
      productFirst: "Men",
      productSecond: "Women",
      productTherd: "",
    },
    {
      title: "Sale",
      productFirst: "Sport",
      productSecond: "Lucury",
      productTherd: "",
    },
    {
      title: "Product",
      productFirst: "Bag",
      productSecond: "Sweather",
      productTherd: "Sunglasses",
    },
  ];
  const [type, setType] = useState("One");

  return (
    <div className="ShopItemsContainer">
      <div className="categores">
        <span style={{ fontSize: "30px" }}>Categories</span>
        {categoryList.map((el, index) => {
          return <ShopCategories item={el} key={index} />;
        })}
      </div>

      <div className="listDresses">
        <div className="categoriesSelect">
          <span>All</span>
          <span> Men's</span>
          <span>Women's</span>
        </div>
        {dataShop.map((el, index) => {
          return (
            <div className="dressesContainer" key={index}>
              <div
                className="dressesImg"
                style={{ backgroundImage: `url("${el.img}")` }}
              >
                <div className="dressesImgHover">
                  <span
                    className="icon-liked"
                    onClick={addLikdeItemToStore}
                  ></span>
                  <span className="icon-eye"></span>
                  <span
                    className="icon-magazine"
                    onClick={addItemsToMagazine}
                  ></span>
                </div>
              </div>
              <div className="dressesInfo">
                <Link to="/correctItem" className="dressesTitle">
                  {el.title}
                </Link>
                <p className="dressesSize">{el.size}</p>
                <span
                  className="G-bg-image-center"
                  style={{ backgroundImage: `url('${el.raiting}')` }}
                />
                <p className="dressesPrice">{el.price}</p>
              </div>
            </div>
          );
        })}
        <div className="div-section">
          <div
            onClick={() => setType("One")}
            className={type === "One" ? "active" : "disabled"}
          >
            1
          </div>
          <div
            onClick={() => setType("Two")}
            className={type === "Two" ? "active" : "disabled"}
          >
            2
          </div>
          <div
            onClick={() => setType("Three")}
            className={type === "Three" ? "active" : "disabled"}
          >
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemContainer;

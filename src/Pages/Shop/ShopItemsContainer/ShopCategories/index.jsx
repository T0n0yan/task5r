import React, { useState } from "react";
import "./style.scss";

const ShopCategories = (props) => {
  const [item, setitem] = useState(false);

  return (
    <div className="categories-blok" key= {props.item.id}>
      <div className="categories-content  ">
        <div className="categories-left" onClick={() => setitem(!item)}>
          {props.item.title}
        </div>
        <span className="icon-arrow-down"  onClick={() => setitem(!item)}> </span>
      </div>
      <div className={item ? "categoriesBlok " : "categoriesDisplay"}>
        <p className="categories-text">{props.item.productFirst}</p>
        <p className="categories-text"> {props.item.productSecond}</p>
        <p className="categories-text"> {props.item.productTherd}</p>
      </div>
    </div>
  );
};

export default ShopCategories;

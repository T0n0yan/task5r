import React from "react";
import "./style.scss";

const ProductTitle = (props) => {
  return (
    <div className="productTitleContainer ">
      <div className="G-Container">
        <div  className="proTitCont G-direction-aline-justify">
          <h2>{props.title}</h2>
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;

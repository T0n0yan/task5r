import React from "react";
import "./style.scss";

const FirstContainer = ({ el }) => {
  return (
    <div className="FisrtHomeContainer">
      <div className="firstHomeContTitle">
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <span>{el.introduction}</span>
      </div>
      <div
        className="imgCont"
        style={{ backgroundImage: `url("${el.img}")` }}
      />
    </div>
  );
};

export default FirstContainer;

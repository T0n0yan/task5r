import React, { useState } from "react";
import "./style.scss";
import "../../assets/Style/Global.scss";
import "../../assets/Style/flex.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Header = () => {
  const count = useSelector((state) => state.addedItems);
  const countMagazine = useSelector((state) => state.MagazineCount);
  const [variable, setVariable] = useState(true);

  const menu = () => {
    setVariable(!variable);
  };
  return (
    <div className={variable ? "container" : "containerMedia"}>
      <div className="G-Container">
        <div className="headerContainer G-justify-align-center">
          <span className="headerTitle">Zay</span>
          <div className="links">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
          <div className="icon-list listIcon" onClick={menu}/>
          <div className="icons">
            <div className="inputAndSearch">
              <span className="icon-search  searchIcon"></span>
              <input type="text" placeholder="Search ..." />
            </div>
            <div className="icon-magazine addedMagazineItems ">
              <span className="countMagazine">{countMagazine}</span>
            </div>
            <div className="icon-liked addedItems">
              <span className="countedItem">{count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

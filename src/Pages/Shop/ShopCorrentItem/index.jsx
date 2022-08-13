import React, { useState } from "react";
import { Stars } from "../../../assets/Images/Starts/starts";
import "./style.scss";
import "../../../assets/Style/flex.scss";
import CorrentItem from "./index";
import CurrentItemCarusel from "./../CurrentItemList/index";
import CurrentItemLeftCarusel from "../CurrentItemList/LeftSideCarusel";

const ShopCorrentItem = () => {
  const [count, setCount] = useState(1);

  const incriement = () => {
    setCount(count + 1);
  };
  const decriement = () => {
    if (count === 1) {
      return 1;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="correntItemContainer">
        <div className="correntItemsLeftSide">
          <div className="correntItemVeiw">
            <CurrentItemLeftCarusel />
          </div>
        </div>
        <div className="correntItemsRightSide">
          <h2>Active Wear</h2>
          <span className="correntItemPrice">$25.00</span>
          <div className="raitingItem">
            <div
              className="raitingPic"
              style={{ backgroundImage: `url("${Stars.fourStar}")` }}
            />
            <span> Raiting. 4.8 | 36 Comments</span>
          </div>
          <div className="correntItemDescription">
            <h6>Description:</h6>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed
              orci a diam ultrices aliquet interdum quis nulla.
            </span>
          </div>

          <span className="itemBrend">
            Brand: <p>Easy Wear</p>
          </span>
          <span className="itemColor">
            Available Color:<p> Black / White</p>
          </span>
          <div className="specificationDiv">
            <h4>Specification:</h4>
            <ul>
              <li>Harmara</li>
              <li>Nstuma akuratni</li>
              <li>Papuka</li>
              <li>Texakan artadranqa Qurs</li>
            </ul>
          </div>
          <div className="itemSize-and-quantity">
            <div className="itemSize">
              <span>Size :</span>
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">XL</div>
            </div>
            <div className="quantity">
              <span>Count:</span>
              <div onClick={decriement} className="minus">
                -
              </div>
              <div className="offerCount">{count}</div>
              <div onClick={incriement} className="plus">
                +
              </div>
            </div>
          </div>
          <div className="addButtons">
            <button className="G-direction-aline-justify">Buy</button>
            <button className="G-direction-aline-justify">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="currentCaruselContainer">
        <CurrentItemCarusel />
      </div>
    </div>
  );
};

export default ShopCorrentItem;

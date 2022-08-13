import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="G-Container">
        <div className="listContainer G-justify-space-between">
          <div className="list">
            <span className="homeListTitle">Zay Shop</span>
            <ul className="contactsInfo">
              <li className="icon-location">
                123 Consectetur at ligula 10660
              </li>
              <li className="icon-phone"> 010-020-0340</li>
              <li className="icon-message"> info@company.com</li>
            </ul>
          </div>

          <div className="list ">
            <span>Products</span>
            <ul>
              <li> Luxury</li>
              <li>Sport Wear</li>
              <li>Men's Shoes</li>
              <li>Women's Shoes</li>
              <li>Popular Dress</li>
              <li>Gym Accessories</li>
              <li>Sport Shoes</li>
            </ul>
          </div>
          <div className="list">
            <span>Further Info</span>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Shop Locations</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footerSocials G-justify-space-between">
          <div className="footerSocialIcons G-just-alin-center">
            <span className="icon-facebook"></span>
            <span className="icon-instagram"></span>
            <span className="icon-twitter"></span>
            <span className="icon-linkedin"></span>
          </div>
          <label className="label">
            <input placeholder="Email address" />
            <button>Subscribe</button>
          </label>
        </div>
      </div>

      <div className="footerFaq"> 
        <div className="G-Container ">
          <span>
            Copyright © 2021 Company Name | Designed by{" "}
            <a href="https://templatemo.com/" target="_blank">
              TemplateMo
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

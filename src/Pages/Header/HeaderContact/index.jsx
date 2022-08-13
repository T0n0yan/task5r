import React from "react";
import "./style.scss";

const HeaderContact = () => {
  return (
    <div className="contactContainer">
      <div className="G-Container">
        <div className="headerContact G-justify-space-between G-align-items-center">
          <div className="contacts ">
            <a href="https://www.info@company.com/ " target='_blank' className="icon-message"> info@company.com</a>
            <span className="icon-phone"> 010-020-0340</span>
          </div>
          <div className="socialContact G-justify-space-between G-align-items-center ">
            <a
              href="https://www.facebook.com/templatemo"
              target="_blank"
              className="icon-facebook"
            ></a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="icon-instagram"
            ></a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="icon-twitter"
            ></a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="icon-linkedin"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;

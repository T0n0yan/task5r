import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { leftSideCaruselPics } from "./leftsidecarusel";
const CurrentItemLeftCarusel = () => {
  const settingsCaruselSingle = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <div className="LeftCaruselContainer">
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className="sliderTop"
      >
        <div>
          <img
            src={leftSideCaruselPics.img1}
            alt="img1"
            style={{ width: "524px", height: "524px" }}
          />
        </div>
      </Slider>
      <Slider
        {...settingsCaruselSingle}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div className="bottomCarusel">
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img1})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img2})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img3})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img4})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img5})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img6})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img7})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img8})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img9})` }}
          />
          <div
            style={{ backgroundImage: `url("${leftSideCaruselPics.img10})` }}
          />
        </div>
      </Slider>
    </div>
  );
};
export default CurrentItemLeftCarusel;

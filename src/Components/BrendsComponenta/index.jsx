import React from "react";
import { brandsData } from "./brendsData";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurBrandes = () => {
  const settingsBrends = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="brandsMainContainer G-Container">
      <div className="brandTitleContainer">
        <h2>Our Brands</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod Lorem ipsum dolor sit amet.asdLorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit
          amet.asdLorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod Lorem ipsum dolor sit amet.asdLorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit
          amet.asd
        </span>
      </div>
      <div className=" brandsContainer ">
        <Slider {...settingsBrends}>
          {brandsData.map((el, index) => {
            return (
              <div className="brandsBlock">
                <div
                  className="G-bg-image-center G-justify-align-center  Brands "
                  style={{
                    backgroundImage: `url("${el.img}")`,
                  }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default OurBrandes;

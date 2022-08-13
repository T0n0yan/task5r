import React from "react";
import Slider from "react-slick";
import { dataShop } from "./../shopdata";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CurrentItemCarusel = () => {
  const settingsShopList = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
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
    <div className="listDresses">
      <h2>Related Products</h2>
      <Slider {...settingsShopList}>
        {dataShop.map((el, index) => {
          return (
            <div className="currentItemsPadding">
              <div className="currentDressesContainer" key={index}>
                <div
                  className="currentDessesImg"
                  style={{ backgroundImage: `url("${el.img}")` }}
                >
                  <div className="dressesImgHover">
                    <span className="icon-liked"></span>
                    <span className="icon-eye"></span>
                    <span className="icon-magazine"></span>
                  </div>
                </div>
                <div className="currentDressesInfo">
                  <span className="currentDressesTitle">{el.title}</span>
                  <p className="currentDressesSize">{el.size}</p>
                  <div
                    className="G-bg-image-center currentListRaiting"
                    style={{ backgroundImage: `url('${el.raiting}')` }}
                  />
                  <p className="currentDressesPrice">{el.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CurrentItemCarusel;

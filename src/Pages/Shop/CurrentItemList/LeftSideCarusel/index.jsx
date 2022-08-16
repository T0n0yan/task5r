import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import { leftSideCaruselPics } from "./leftsidecarusel";
import { leftCaruselData } from "./caruselImajesData";
const CurrentItemLeftCarusel = () => {
  const settingsCaruselSingle = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  const [img, setImg] = useState(leftSideCaruselPics.img3);

  return (
    <div className="LeftCaruselContainer">
      <div className="">
        <div className="topContainer">
          <img src={img} className="topImg" alt="asd" />
          <Slider {...settingsCaruselSingle} >
            {leftCaruselData.map((el,index) => {
              return (
              <div key={index} className="bottomImgCarusel">
                <img src={el.img}  alt='yoga pics' className="sliderPics" onClick={()=> setImg(el.img)}/>
              </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default CurrentItemLeftCarusel;

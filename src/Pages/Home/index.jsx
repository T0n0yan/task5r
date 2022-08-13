import React from "react";
import "./style.scss";
import ProductTitle from "../../Components/Product Title/index";
import ThierdListComponent from "./ThirdHomeContainer";
import SecondHomeContainer from "./SecondHomeContainer/index";
import { thirdData } from "./ThirdHomeContainer/thierdData";
import { secondData } from "./SecondHomeContainer/secondData";
import { FirstHomeContainerData } from "./HomeFirstContainer/FirstHomeContainerData";
import FirstContainer from "./HomeFirstContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="home">
      <div className="firstList">
        <Slider {...settings}>
          {FirstHomeContainerData.map((el) => {
            return <FirstContainer el={el}  />;
          })}
        </Slider>
      </div>

      <div className="secondList G-Container ">
        <ProductTitle
          title="Categories of The Month"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <div className="secondListItemContainer G-justify-space-between ">
          {secondData.map((el) => (
            <SecondHomeContainer items={el} />
          ))}
        </div>
      </div>

      <div className="thirdList G-Container">
        <ProductTitle
          title="Featured Product"
          description="Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        />
        <div className="thirdListItemContainer">
          {thirdData.map((el) => (
            <ThierdListComponent post={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

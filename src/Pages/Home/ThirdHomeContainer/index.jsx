import React from "react";
import "./style.scss";
import "../../../assets/Style/background.scss";

const ThierdListComponent = (props) => {
  const post = props.post;
  return (
    <div className="thierdListContainer G-justify-content-center ">
      <div
        className="topImg G-bg-image-center "
        style={{ backgroundImage: `url('${post.img}')` }}
      />
      <div className="buttonCont">
        <div className="raitingAndPrice">
          <div
            className="stars G-bg-image-center "
            style={{ backgroundImage: `url('${post.raiting}')` }}
          ></div>
          <div>{post.price}</div>
        </div>
        <div className="info">
          <h2>{post.title}</h2>
          <span className="description">{post.desc}</span>
          <span className="reviews"> Reviews {post.reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default ThierdListComponent;

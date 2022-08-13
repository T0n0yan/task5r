import React from "react";
import './style.scss'
import '../../../assets/Style/Global.scss'



const SecondHomeContainer = (props) => {
    const items = props.items
  return (
    <div className="secondHomeContainer G-direction-aline-justify">
      <div className="secondImg G-bg-image-center" style={{ backgroundImage: `url('${items.img}')` }} />
      <h3>{items.title}</h3>
      <button>Go Shop</button>
    </div>
  );
};

export default SecondHomeContainer;

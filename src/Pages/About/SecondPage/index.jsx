import React from "react";
import "./style.scss";

const SecondPage = (props) => {
  const aboutPost = props.aboutPost;
  return (
    <div className="secondContainer  G-direction-aline-justify">
      <div className="secContInnerBody">
        <p>{aboutPost.title}</p>
      </div>
    </div>
  );
};

export default SecondPage;

import React from "react";
import "./style.scss";
import FirstAboutContainer from "./FirstAboutContainer";
import ProductTitle from "../../Components/Product Title/index";
import SecondPage from "./SecondPage";
import OurBrandes from "../../Components/BrendsComponenta";
import {SecondAboutData} from "./SecondPage/aboutSecondData";

const About = () => {
    return (
        <div>
            <FirstAboutContainer/>
            <div className="secondPageAbout">
                <ProductTitle
                    title="Our Services"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet."
                />
                <div className="AboutSecondContainerList">
                    {SecondAboutData.map((el, id) => (
                        <SecondPage aboutPost={el} id={SecondAboutData.id}/>
                    ))}
                </div>

                <OurBrandes/>
            </div>
        </div>
    );
};

export default About;

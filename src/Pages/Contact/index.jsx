import React from "react";
import "./style.scss";
import ProductTitle from "./../../Components/Product Title/index";

const Contact = () => {
  return (
    <div className="ContacContainer">
      <ProductTitle
        style={{ backgroundColor: "#e9eef5" }}
        title="Contact Us"
        description="Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet."
      />
      <div className="mapContainer">
        <iframe
          title="Map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.1111800550252!2d44.044491279969726!3d40.16580628697089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aec2805934479%3A0x4528a9e5e15657e3!2z1LHWgNW01aHVvtWr1oDVqyDVtNWh1oDVpiwg1YDVodW11aHVvdW_1aHVtg!5e0!3m2!1shy!2s!4v1659611340480!5m2!1shy!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="input-section">
        <div className="input-position">
          <div>
            <label htmlFor="name"> Name </label> <br />
            <input type="text" id="name" placeholder="Name" className="input" />
          </div>

          <div>
            <label htmlFor="email"> Email </label> <br />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="input"
            />
          </div>
        </div>

        <label htmlFor="subject">
          Subject
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="subject"
          />
        </label>

        <label for="message">Messaage</label>

        <textarea
          id="message"
          placeholder="Messaage"
          className="message"
        ></textarea>

        <div className="btn-position">
          <button className="button"> Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

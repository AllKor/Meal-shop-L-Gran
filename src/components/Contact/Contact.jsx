import React from "react";
import "./Contact.scss";
import image from "../../assets/images/9.png";
import backgroundImage from "../../assets/images/7.jpg";
import SocialIconsContainer from "../SocialIcons/SocialIconsContainer";
import { useSelector } from "react-redux";
import { getMainText } from "../../redux/contactSelector";

const Contact = () => {
  const mainText = useSelector((state) => getMainText(state));

  return (
    <div
      className="contact"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="contact__inner">
          <div className="contact__item">
            <div className="contact__content">
              <h2 className="contact__title">Наслаждайтесь нашим завтраком</h2>
              <div className="contact__text">
                <p>{mainText}</p>
              </div>
            </div>
            <div className="contact__image">
              <img src={image} alt="contact__image" />
            </div>
          </div>
          <SocialIconsContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;

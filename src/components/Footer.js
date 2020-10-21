import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>Connect With Me</p>
      <a
        href="https://www.linkedin.com/in/david-yuen-549bb3b5/"
        className="linkedInSocial"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" color="blue" />
      </a>
      <a
        href="https://www.instagram.com/dave.yuen/"
        className="instagramSocial"
      >
        <FontAwesomeIcon icon={faInstagram} size="4x" color="beige" />
      </a>
      <a href="https://github.com/dyuen510" className="githubSocial">
        <FontAwesomeIcon icon={faGithub} size="4x" color="white" />
      </a>
    </div>
  );
};

export default Footer;

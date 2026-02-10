import React from "react";
import "./About.css";
import Self from "./images/self.png";
import AboutImg1 from './images/aboutImg1.JPG';
import AboutImg2 from './images/aboutImg2.jpg';
import AboutImg3 from './images/aboutImg3.jpg';
import AboutImg5 from './images/aboutImg5.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Resume from './resume/Resume.pdf';
import Footer from './Footer.js';

const About = () => {
  library.add(faEnvelope, faKey);
  return (
    <div className="about">
      <hr />
      <div className ='firstContainer'>
      <div className='profileImage'>
      <img
        src={Self}
        style={{ width: 300, height: 300}}
      />
      </div>
      <div className='socialLinks'>
      <a
        href="https://www.linkedin.com/in/david-yuen-549bb3b5/"
        className="linkedInSocial"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="blue" />
      </a>
      <a
        href="https://www.instagram.com/dave.yuen/"
        className="instagramSocial"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="brown" />
      </a>
      <a href="https://github.com/dyuen510" className="githubSocial">
        <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
      </a>
      <a href="mailto:davidyuen0305@gmail.com" className="mailSocial">
        <FontAwesomeIcon icon={faEnvelope} size="2x" color="gray" />
      </a>
      
      
      </div>
      
      <div className='personalStatement'>
      <p className="aboutH">
       welcome, i'm david
      </p>
      <p className="aboutp">
      I'm a fullstack web developer with a background in business that is passionate 
      about creating as well as designing products that improves user experience.
      </p>
      <p className="aboutp">
      Other passions of mine includes biking around to explore new breweries, hiking here and there, and traveling to experience different
      cultures while trying local cuisines. 
      </p>

      <p className='aboutF'>
        - Based in San Francisco Bay Area
      </p>

      <button className="button">
      <a className="button" href={Resume} download>
      Download Resume
    </a>
</button>
  <p className='fileSize'>File Size: 144KB</p>
      </div>
      </div>
      <div className='midLine'>
      <hr />
      </div>
      <div className='aboutImages'>
      <img
        src={AboutImg1}
        style={{ width: 250, height: 350, margin:'20px'}}
      />
            <img
        src={AboutImg2}
        style={{ width: 250, height: 350, margin:'20px'}}
      />
      <img
        src={AboutImg3}
        style={{ width: 250, height: 350, margin:'20px'}}
      />
      <img
        src={AboutImg5}
        style={{ width: 390, height: 280, margin:'20px'}}
      />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default About;

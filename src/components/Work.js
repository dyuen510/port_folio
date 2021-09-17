import React, { useState, useEffect } from "react";
import Carousel from './carousel_components/Carousel.js';
import "./Work.css";
import RTE from './images/rte.png';
import ProjectChinatown from './images/projectchinatown.png';
import Covid19 from './images/covid19.png';
import Spotify from './images/spotify.png';
import Dragongate from './images/dragongate.png';
import Footer from './Footer.js';
import NetFlix from './images/netflix.png';
import { CoffeeLoading, CircleLoading } from 'react-loadingg';
import styled from 'styled-components';
import I1 from './Cimages/i1.png';
import I2 from './Cimages/i2.png';
import I3 from './Cimages/i3.png';
import I4 from './Cimages/i4.png';
import I5 from './Cimages/i5.png';
import I6 from './Cimages/i6.png';
import I7 from './Cimages/i7.png';
import I8 from './Cimages/i8.png';
import I9 from './Cimages/i9.png';
import I10 from './Cimages/i10.png';
import I11 from './Cimages/i11.png';
import I12 from './Cimages/i12.png';
import I13 from './Cimages/i13.png';
import I14 from './Cimages/i14.png';
import I15 from './Cimages/i15.png';
import I16 from './Cimages/i16.png';
import I17 from './Cimages/i17.png';
import I18 from './Cimages/i18.png';
import I19 from './Cimages/i19.png';
import I20 from './Cimages/i20.png';
import I21 from './Cimages/i21.png';
import I22 from './Cimages/i22.png';
import I23 from './Cimages/i23.png';
import I24 from './Cimages/i24.png';
import I25 from './Cimages/i25.png';
import I26 from './Cimages/i26.png';


const Work = () => {

  

  // useEffect(() => {
  //   const handleAutoplay = setInterval(handleClickNext, 3000);
  //   return () => clearInterval(handleAutoplay);
  // }, [handleClickNext]);

  return (
    <div className="work">
 <br/>
 <br/>
 <br/>
        <h4>Web Development</h4>
        <div className='webProjects'>
          <div className='workGrid'>
          <a
          href="https://www.remineralize.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={RTE} width="500" height="350" alt="img" />
        
        <div className='overlay overlay__blur'>
            <div className='image__title'>Remineralize The Earth</div>
            <p className='image__description'>Updating resource directory, wordpress powered site, GIS map plugin,
            created tutorial on updating resource directory</p>
            <p className='image__date'>Oct 2020 - Current</p>
        </div>
        </a>
          </div>
          <div className='workGrid'>
          <a
          href="https://www.projectchinatown.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={ProjectChinatown} width="500" height="350" alt="img" />
        
                <div className='overlay overlay__blur'>
            <div className='image__title'>Project Chinatown</div>
            <p className='image__description'>mobile responsiveness, ruby on rails, vue.js and initiated react native</p>
            <p className='image__date'>Apr 2020 - Oct 2020</p>
        </div>
        </a>
          </div>
        <div className='workGrid'>
          {/* <hr/> */}
          <a class='imageStyle'
          href="https://dyuen510.github.io/covid19/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={Covid19} width="500" height="350" alt="img" />
        
                <div className='overlay overlay__blur'>
            <div className='image__title'>Covid Tracker</div>
            <p className='image__description'>api call to retrieve covid data</p>
            <p className='image__date'>May 2020</p>
        </div>
        </a>
        {/* <div class='info'>
            <p>Hello world</p>
          </div> */}
          {/* <div class='info'>
            <p>Hello world</p>
          </div> */}
          </div>
          <div className='workGrid'>
          <a
            href="https://spotify-clone-b6272.firebaseapp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className='rounded_corners' src={Spotify} width="500" height="350" alt="img" />
          
                  <div className='overlay overlay__blur'>
            <div className='image__title'>Spotify Clone</div>
            <p className='image__description'>useReducer and useContext hooks in react similar
            to redux with datalayers</p>
            <p className='image__date'>Oct 2020</p>
        </div>
        </a>
          </div>
          <div className='workGrid'>
          <a
            href="http://www.dragongate300.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className='rounded_corners' src={Dragongate} width="500" height="350" alt="img" />
          
                  <div className='overlay overlay__blur'>
            <div className='image__title'>Dragon Gate</div>
            <p className='image__description'>Ruby on rails, mobile responsiveness with media queries</p>
            <p className='image__date'>Aug 2020</p>
        </div>
        </a>
          </div>
          <div className='workGrid'>
          <a
          href="https://netflix-clone-545ce.firebaseapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={NetFlix} width="500" height="350" alt="img" />
        
        <div className='overlay overlay__blur'>
            <div className='image__title'>Netflix Clone</div>
            <p className='image__description'>Axios to fetch data from movie api, useEffect and 
            useState hooks from React</p>
            <p className='image__date'>Oct 2020</p>
        </div>
        </a>
          </div>
          </div>
          <br />
          <br />
          <br />
          <hr/>
          <Footer />
        </div>

  
  );
};

export default Work;

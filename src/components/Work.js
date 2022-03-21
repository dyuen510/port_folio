import React, { useState, useEffect } from "react";
import "./Work.css";
import RTE from './images/rte.png';
import ProjectChinatown from './images/projectchinatown.png';
import Covid19 from './images/covid19.png';
import Spotify from './images/spotify.png';
import Dragongate from './images/dragongate.png';
import Footer from './Footer.js';
import NetFlix from './images/netflix.png';
import Ers from './images/ers.PNG';
import Cache from './images/CacheEmAll.PNG';



const Work = () => {

  

  // useEffect(() => {
  //   const handleAutoplay = setInterval(handleClickNext, 3000);
  //   return () => clearInterval(handleAutoplay);
  // }, [handleClickNext]);

  return (
    <div className="work">
      <br />
      <br />
      <br />
        <h4>Web Development</h4>
        <div className='webProjects'>
          <div className='workGrid'>
          <a
          href="https://github.com/JavaNextGen/project-1-dyuen510"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={Ers} width="500" height="350" alt="img" />
        
        <div className='overlay overlay__blur'>
            <div className='image__title'>Employee Reimbursement System</div>
            <p className='image__description'>Role as Fullstack Developer. Backend development with Java, Javalin, JUnit for testing and Postgres. For frontend basic html, css, js and bootstrap.</p>
            <p className='image__date'>December 2021 - January 2022</p>
        </div>
        </a>
          </div>
          <div className='workGrid'>
          <a
          href="https://github.com/CacheEmAll/Project3"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className='rounded_corners' src={Cache} width="500" height="300" alt="img"/>
        
        <div className='overlay overlay__blur'>
            <div className='image__title'>CacheEmAll Ecommerce</div>
            <p className='image__description'>Primary role as front end developer working with Angular and typescript on frontpage, deals, wishlist and overall design of application.
            Worked with a large team with daily team standups. Retrieved product data with pokeApi and user data with GCP Postgres in order to share database with every team. </p>
            <p className='image__date'>February 2022 - March 2022</p>
        </div>
        </a>
          </div>
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
            <p className='image__date'>Oct 2020 - June 2021</p>
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

import React from "react";
import "./Project.css";
import Netflix from "./images/netflix.png";
import Bamazon from "./images/bamazon.png";
import Covid19 from "./images/covid19.png";
import Hiking from "./images/hiking.png";
import Liri from "./images/liri.png";
import ProjectChinatown from "./images/projectchinatown.png";
import Spotify from './images/spotify.png';
import Footer from './Footer.js';

const Project = () => {
  return (
    <div className="container">
      <div className = 'banner'></div>
      <div className="project">
        <div className="projectImg">
          <a
            href="https://netflix-clone-545ce.firebaseapp.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Netflix} width="500" height="350" alt="img" border-radius='25px;' />
          </a>
        </div>
        <div className="description">
          <h3>Netflix Clone</h3>
          <p>
            FrontEnd clone of Netflix using React and deploying on firebase.
            Utitlized axios to fetch data from movie api, usage of useEffect and
            useState hooks.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="description">
          <h3>Bamazon</h3>
          <p>
            Assignment from bootcamp which uses node.js and mysql to create a
            storefront similar to Amazon. By using the CLI the app would be able
            to take in orders from the user and at the same time deplete the
            stock from store's inventory. Also includes manager's view of the
            whole inventory and provides the controls to restock products or add
            a new product to inventory.
          </p>
        </div>
        <a
          href="https://github.com/dyuen510/bamazon"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Bamazon} width="500" height="350" alt="img" />
        </a>
      </div>
      <div className="project">
        <a
          href="https://dyuen510.github.io/covid19/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Covid19} width="500" height="350" alt="img" />
        </a>
        <div className="description">
          <h3>Covid19</h3>
          <p>
            Project I created that displays up to date statistics on Covid19 in
            each state. Also displays a few news articles relating to the
            subject. For this project I used html, css, ajax calls, GET method
            and APIs for retrieving the data.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="description">
          <h3>Hiking Trails</h3>
          <p>
            Simple site deployed to heroku and created with html, css, react.js
            and fetch. Page redirect for the navigation bar doesn't exist yet.
            Site is completely responsive with media queries.
          </p>
        </div>
        <a
          href="https://hiking-project-app.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Hiking} width="500" height="350" alt="img" />
        </a>
      </div>
      <div className="project">
        <a
          href="https://github.com/dyuen510/liri-node-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Liri} width="500" height="350" alt="img" />
        </a>
        <div className="description">
          <h3>Liri App</h3>
          <p>
            App that is similar to Siri but instead of taking voice commands,
            Liri takes in a few commands in the CLI. The app is completed with
            Node.js, process.argv, axios to execute server-side HTTP requests to
            third-party APIs, fs package and inquirer.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="description">
          <h3>Project Chinatown</h3>
          <p>
            Startup project which show cases businesses around chinatown and
            helps give the businesses in that community an online platform.
            Worked in a team of 6 as one of the developers of the project.
          </p>
        </div>
        <a
          href="https://www.projectchinatown.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={ProjectChinatown} width="500" height="350" alt="img" />
        </a>
      </div>
      <div className="project">
        <div className="projectImg">
          <a
            href="https://spotify-clone-b6272.firebaseapp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Spotify} width="500" height="350" alt="img" />
          </a>
        </div>
        <div className="description">
          <h3>Spotify Clone</h3>
          <p>
            FrontEnd clone of Spotify using React and deploying on firebase.
            Utilized useReducer and useContext hooks in react which is similar to redux with datalayers.
            Usage of spotify authorization in order to login to the app which would display something similar to 
            spotify user's playlist and discover weekly section. 
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Project;

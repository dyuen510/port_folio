import React from "react";
import "./App.css";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Work from './components/Work';
import Uxdesign from './components/Uxdesign.js';

function App() {

 
  return (
    <div className="App">
      <div className="routesContainer">
        <h1 className='nameHeader'> David Yuen</h1>
        <Router className="routes">
          <Link to="/" className="link">
            Web Development
          </Link>
          <Link to="/uxDesign" className="link">
            UX Design
          </Link>
          <Link to="/aboutme" className="link">
            About
          </Link>

          <Route exact path="/" component={Work} />
          <Route exact path="/uxDesign" component={Uxdesign} />
          <Route exact path="/aboutme" component={About} />
        </Router>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

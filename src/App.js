import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Project";
import ProjectContainer from "./components/ProjectContainer";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./components/About";
import Application from "./components/Application";
// import Pdf from "./components/images/Resume.pdf";
import ResumePdf from "./components/Resume.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="topDeck"></div>
      <div className="routes">
        <Router className="routes">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about-me" className="link">
            About
          </Link>
          <Link to="/applications" className="link">
            Applications
          </Link>
          <Link to="/projects" className="link">
            Projects
          </Link>
          <Link to="/resume" className="link">
            Resume
          </Link>
          <Route path="/resume" component={ResumePdf} />
          <Route path="/about-me" component={About} />
          <Route path="/applications" component={Application} />
          <Route path="/projects" component={ProjectContainer} />
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;

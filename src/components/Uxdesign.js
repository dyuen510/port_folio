import React, { useState, useEffect} from 'react';
import './Uxdesign.css';
import { CoffeeLoading, CircleLoading } from 'react-loadingg';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WhaleProject from './WhaleProject.js';
import Rental from './Rental.js';
import Snack from './Snack.js';
import Footer from './Footer.js';




const Uxdesign = () => {

    return (
        <div className='uxContainer'>
            <br/>
            <br/>
            <br/>

            <h4> UX Design</h4>
            <br/>
      <br />
      <br />
          <br />
          <CoffeeLoading />
            <br/>
            <br/>
            <br/>
            <div className="routesContainer">
        <Router className="routes">
          <Link to="/uxDesign" className="ux_link">
            The Whale Project
          </Link>
          <Link to="/rental_homes" className="ux_link">
            TravelThailand
          </Link>
          <Link to="/snack_ordering" className="ux_link">
            CinemaSnacks
          </Link>
          <Route exact path="/uxDesign" component={WhaleProject}/>
          <Route exact path="/rental_homes" component={Rental} />
          <Route exact path="/snack_ordering" component={Snack} />
          
        </Router>
      </div>
      <br />
          <br />
          <br />
          <hr/>
          <Footer />
    </div>


    )
}

export default Uxdesign

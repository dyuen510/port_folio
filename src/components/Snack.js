import React, { useState, useEffect } from "react";
import './Snack.css';
import SnackLogo from './images/snack.png';
import CSPaperWF from './images/cspaperwf.jpg';
import Story from './images/story.jpg';
import RentalWire2 from './images/rental_wire2.png';
import RentalMock from './images/rentalmock.png';
import Persona from './images/persona.png';
import Sitemap from './images/sitemap.png';
import Currency from './images/currency.png';
import Language from './images/language.png';
import RentalCrazy8 from './images/rental_crazy8.png';
import CS1 from './images/cs1.png';
import CS2 from './images/cs2.png';
import CS3 from './images/cs3.png';
import CSwire1 from './images/cswireframe1.png';
import CSwire2 from './images/cswireframe2.png';
import CSwire3 from './images/cswireframe3.png';
import BegMock from './images/begmock.png';
import BegMock2 from './images/begmock2.png';
import BegMock3 from './images/begmock3.png';
import BegMockup from './images/begMockup.png';
import EndMockup from './images/endmock.png';
import Video from './video/video.mov';



const Snack = () => {


    return (
        <div className='snack_Container'>
            <br/>
            <br/>
            <br/>    
            <br/>
            <img
  src={SnackLogo}
  className='snackLogo'
/>
            <br/>
            <br/>
            <div className='project_Container'>
            <div className='project_info'>
        <br/>
        <br/>
        <div className='mockup_display'>
        <img
        src={CS1}
        style={{ width: 230, height: 400}}
      />            <img
      src={CS2}
      style={{ width: 210, height: 400}}
    />
     <img
      src={CS3}
      style={{ width: 210, height: 400}}
    />

        </div>
        <br/>
            <br/>    
            <br/>            <br/>
            <br/>    
            <br/>            <br/>
            <br/>    
            <br/>
        <br/>
        <br/>

        <h1 className='w_title'>Project Overview</h1>
        <br/>

        
        <br/>
        <p className='f_paragraph'>
        Cinema snacks is designed to bring users convenience while ordering snacks at theaters and making the experience easy and fun to use.
        This was my first project in the course and at the end of the course I did a revision to change the overall app.
        </p>
        <p>Role: UX designer designing the CinemaSnacks app from conception to delivery </p>
        <p style={{color:'red'}}>The challenge is to design a chatbot snack ordering app for a movie theater.</p>
        <p>The goal is to design an app that has low user error rates and user's time on task which would be tested 
            by conducting multiple usability tests. Low error rates and efficient time on task would tell us that the 
            app is convenient and easy to use.
        </p>
    </div>
    <div className='ideation'>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className='w_title'>Ideation</h1>
        <br/>

        
        <br/>
        <br/>

    <p>I created a story board for the project to identify design weaknesses and help me visualize my overall design allowing me to explore other possibilities. 
    </p>
    <br/>
    <br/>
    <img
      src={Story}
      className='paperImage'
    />
        <br/>
    <br/>
    <br/>
    <br/>    <br/>
    <br/>
    <p>Next I came up with five different features that I would possibly want to include in the design.</p>
    <br/>
    <br/>
        <img
      src={CSPaperWF}
      className='paperImage'
    />
    </div>
    <div className='digitalwf'>
        <br/>
        <br/>

        
<br/>
<br/>       <br/>

        
<br/>
<br/>       <br/>

        
<br/>
<br/>
        <h1 className='w_title'>Wireframess</h1>
        <br/>
        <br/>
        <br/>
        <img
      src={CSwire1}
      style={{ width: 200, height: 400}}
    />        <img
    src={CSwire2}
    style={{ width: 200, height: 400}}
  />
      <img
      src={CSwire3}
      style={{ width: 200, height: 400}}
    />

        <br/>
        <br/>
        <br/>
    <p>The nonprofit orgnization that I volunteered for first introduced me to Figma, but I barely scratched the surface of the prototyping tool. 
        I learned alot heading straight in and creating my first wireframe.
    </p>
    <br/>
        <br/>
        <br/>        <br/>
        <br/>
        <br/>
        <h1 className='w_title'>Beginning of Course Mockup</h1>
        <br/>  
            <br/>
            <br/>
        <img
      src={BegMock}
      style={{ width: 200, height: 400}}
    />        <img
    src={BegMock2}
    style={{ width: 200, height: 400}}
  />
      <img
      src={BegMock3}
      style={{ width: 200, height: 400}}
    />
        <br/>
    <br/> 
    <br/>
    <br/>
    <br/>
    <br/>
          <img
      src={BegMockup}
      style={{ width: 300, height: 500}}
    />
       <br/>
       <br/>
    <br/>
       <a href='https://www.figma.com/proto/HMjHQOijnKQIb9dldChrT3/Mockup?node-id=1%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1' 
    style={{color:'blue', textDecoration:'none', margin:'50px'}} target="_blank">
    See prototype
    </a>
            <br/>  
            <br/>
            <br/>
            <br/>
    <br/>
    <br/>
    <br/>
    <h1 className='w_title'>End of Course Mockup</h1>
    <br/>
    <br/>
    <p>At the end of the course I didn't feel confident about putting my first project on my portfolio. So I 
        decided to redo it and revise the overall project with the goal of making it more presentable. 
    </p>
    <br/>
    <br/>
    <br/>
    <img
      src={EndMockup}
      className='endMockUp'
    />
       <br/>
    <br/>
    <br/>   
    <br/>
    <br/>
    <br/>
    <video src={Video} width="300" height="500" controls="controls" autoplay="true" />
    <br/>
    <br/>
    <br/>
<a href='https://www.figma.com/proto/HMjHQOijnKQIb9dldChrT3/Mockup?node-id=104%3A15&scaling=scale-down&page-id=0%3A1&starting-point-node-id=104%3A15&show-proto-sidebar=1'
    style={{color:'blue', textDecoration:'none', margin:'50px'}} target="_blank">
    See prototype
    </a>
    <br/>
    <br/>    <br/>
    <br/>
    <br/>
        <p> 
            Since this was my first project I learned so much about wireframing and prototyping on figma. Also the importance of doing multiple 
            usability studies. By revisiting my first project near the end of the Google UX certificate program I was able to apply the skills and experience I have gained 
            throughout the course to revamp the CinemaSnack project allowing me to confidently put it out on my portfolio. I can confidently say that I have made a dent on the surface of UX Design with Figma and Adobe XD. </p>
            <br/>
    <br/>    <br/>
    <br/>
    <br/>    <br/>
    <br/>    <br/>
    <br/>
    <br/>
        </div>
        </div>
        </div>

     
    )
}

export default Snack

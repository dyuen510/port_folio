import React from 'react';
import Travel from './images/travel.png';
import './Rental.css';
import RentalCrazy8 from './images/rental_crazy8.png';
import RentalWire from './images/rental_wire.png';
import RentalWire2 from './images/rental_wire2.png';
import RentalMock from './images/rentalmock.png';
import Persona from './images/persona.png';
import Sitemap from './images/sitemap.png';
import Currency from './images/currency.png';
import Language from './images/language.png';

const Rental = () => {
    return (
         

            <div className='RentalProjectContainer'>

            <div className='banners_container'>
            <h4 className='travelTitle'>Thailand </h4>
            <br/>
            <br/>
            <br/>
            <br/>

</div>
            <br/>
            <br/>
            <br/>
            <img
  src={Travel}
  className='topImage'
/>
<br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

<div className='project_info'>
        <br/>
        <br/>
        <h1>Project Overview</h1>
        <br/>
        <hr/>
        <br/>
        <p className='f_paragraph'>
        Travel Thailand website is designed to bring convenience and ease when booking rental homes in Thailand by utilizing simple to understand features. We want to focus on Thailand and primarily allow users to choose from regions or cities in Thailand. We want to increase user’s satisfaction by giving them efficient search query results.
        </p>
        <p>Role: UX designer designing the Whale Project from conception to delivery </p>
        <p style={{color:'red'}}>The challenge is to design an accessible website for finding rental homes in Thailand.</p>
        <p>The goal is to design an app that is easy to use with low drop off rates. By doing a usability study I measured
            the time on task, drop off rates and user error rates to see if there are any possible changes needed to improve user's experience.
        </p>
    </div>
    <div className='ideation'>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Ideation</h1>
        <br/>

        <hr/>
        <br/>
        <br/>

    <p>Using the crazy 8's method I was able to come up with one idea each minute with the goal of enhancing user's experience and accessibility. 
    </p>
    <br/>
            <br/>
    <img
      src={RentalCrazy8}
      className='paperImage'
    />
                <br/>
            <br/>
            <br/>
    <p>By using a persona I was able to get a glimpse of the challenges a user faces and design effectively to meet the user's needs.</p>
    <br/>
            <br/>
            <br/>
        <img
      src={Persona}
      className='personaImage'
    />
                <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
    <p>Starting with a sitemap before the wireframes helped with the layout of the website and the navigation that the user's will come across when
        conducting usability studies of the design phase. 
    </p>
        <img
      src={Sitemap}
      className='paperImage'
    />

    </div>
    <div className='digitalwf'>
        <br/>
        <h1>Wireframes and Mockups</h1>
        <br/>
        <hr/>
        <br/>
        <br/>
        
    <p>I got the chance to experience wireframing on AdobeXD and really enjoyed the experience and the features that it offered.</p>
    <br/>
            <br/>
            <br/>
    <img
      src={RentalWire}
      style={{ width: 300, height: 600}}
    />
        <img
      src={RentalWire2}
      style={{ width: 300, height: 600}}
    />
  
            <br/>
            <br/>

<img
  src={RentalMock}
  className='rentalMock'
/>




    <br/>
    <br/>
<a href='https://xd.adobe.com/view/241af054-d1fc-4950-9109-1bbd594d3678-7149/?fullscreen'
    style={{color:'blue', textDecoration:'none', margin:'50px'}} target="_blank">
    See prototype
    </a>
    
    <div>
    <br/>
    <br/>
    <br/>
        <p>Designing this project, I learned how to wireframe on adobe XD and utilized layers to help 
            organize the content. Since this is a travel project I realized that a language selection and a currency selection
            will help users with accessibility. Also a clear navigation with corresponding icons can help users navigate throughout the project
            and provide assistance throughout their user journey. My next steps is to conduct another usability study on the final design to see if there
            are any challenges that were not noticed in the past studies. </p>
            <br/>
    <br/>    <br/>
    <br/>
    <br/>
       
        </div>
        </div>
            </div>

    )
}

export default Rental

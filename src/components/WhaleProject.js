import React from 'react'
import './WhaleProject.css';
import Whales from './images/whales.png';
import Whales2 from './images/whales2.png';
import Whales3 from './images/whales3.png';
import Idea from './images/idea.jpg';
import Crazy8 from './images/crazy8.png';
import Paperwf from './images/paperwf.png';
import WireTop from './images/wireframetop.jpg';
import Wire1 from './images/wire1.png';
import Lofi from './images/lofi.png';
import Mockup from './images/mockup.png';
import Mockup5 from './images/mockup5.png';

const WhaleProject = () => {
    return (
        <div className='whaleProjectContainer'>
            <br/>
            <br/>

            {/* <hr/> */}
            <br/>
            <br/>

            <div className='title'>
                <h1 style={{color:'yellow', fontWeight:'bold', fontSize:'20px'}}>The Whale Project</h1>
                </div>
            <br/>
            <br/>
            <br/>
            <div className='imagesDisplay'>
            <img
        src={Whales}
        style={{ width: 230, height: 400}}
      />            <img
      src={Whales2}
      style={{ width: 230, height: 400}}
    />
     <img
      src={Whales3}
      style={{ width: 240, height: 400}}
    />

    <div className='project_info'>
        <br/>
        <br/>
        <h1>Project Overview</h1>
        <br/>
        <hr/>
        <br/>
        <p className='f_paragraph'>
            The Whale Project is a project to encourage users to participate in local volunteer opportunities. 
            The project provides easier access for users to see articles on conservation, plan their volunteer schedules,
            connect with other volunteers and with the point system that would motivate users to participate in the fun. Our 
            target users are students and adults that are yearning to get out there to volunteer as well as network with others.
        </p>
        <p>Role: UX designer designing the Whale Project from conception to delivery </p>
        <p>The challenge is that a percentage of volunteers in the United States is around 25% in 2017. There is 
            limited available resources regarding conservation efforts and lack of easy access to volunteer opportunities.
        </p>
        <p>The goal is to design an app that attracts users, allows them to manage volunteer schedules and inform 
            users about whale conservation efforts.
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

    <img
      src={Idea}
      style={{ width: 400, height: 200}}
    />
    <p>I did a quick sketch with the method Crazy 8's to come up with 8 different ideas that I can incorporate into the project.
        My main goals was to come up with ideas to assist users with convenient access to information regarding conservation and 
        ideas that would make the project more interactive and fun.
    </p>
    <img
      src={Crazy8}
      style={{ width: 400, height: 200}}
    />

    </div>
    <div className='digitalwf'>
        <br/>
        <h1>Wireframes and Mockups</h1>
        <br/>
        <hr/>
        <br/>
        <br/>
        <img
      src={WireTop}
      style={{ width: 400, height: 200}}
    />
        <p>For the paper wireframe, I did a sketch of five potential screens for the mobile version and a final sketch of the finalized 
        version with all the features that I would like to include.
    </p>
    <img
      src={Paperwf}
      style={{ width: 400, height: 200}}
    />
    <p>After ideation I used the top down approach where I would design for larger screen and then gradually input features that would work best on 
        the mobile version. I started drafting a digital wireframe for desktop screens and then mobile screens to prepare for usability testing. The digital wireframe connected the user flow from searching a volunteer event to confirmation or RVSPing the event.</p>
    <img
      src={Wire1}
      style={{ width: 400, height: 200}}
    />
        <img
      src={Lofi}
      style={{ width: 400, height: 200}}
    />
       <br/>
            <br/>  
            <br/>
            <br/>


<img
  src={Mockup}
  style={{ width: 250, height: 500}}
/>
<img
  src={Mockup5}
  className='whaleMock'
/>


<div>
    <br/>
    <br/>
<a href='https://www.figma.com/proto/ptiDGghbWpaYq9XOKawCA7/Endangered-Whales?node-id=42%3A267&scaling=scale-down&page-id=42%3A266&starting-point-node-id=42%3A267'
    style={{color:'blue', textDecoration:'none', margin:'50px'}} target="_blank">
    See prototype
    </a>
    </div>
    <div>
    <br/>
    <br/>
    <br/>
        <p>Designing this project, I learned how to wireframe on adobe XD and utilized layers to help 
            organize the content. Since this is a travel project I realized that a language selection and a currency selection
            will help users with accessibility. Also a clear navigation with corresponding icons can help users navigate throughout the project
            and provide assistance throughout their user journey. My next steps is to conduct another usability study on the final design to see if there
            are any challenges that were not noticed in the past studies.</p>
            <br/>
    <br/>
    <br/>    <br/>
    <br/>
    <br/>
        </div>

    </div>
    </div>
 
        </div>
    )
}

export default WhaleProject

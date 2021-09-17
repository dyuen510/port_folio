import React, { useState, useEffect} from 'react';
import './Uxdesign.css';
import Carousel from './carousel_components/Carousel.js';
import Persona1 from './images/persona1.png';
import Persona2 from './images/persona2.png';
import Wire1 from './images/wire1.png';
import PaperWF from './images/paperwf.png';
import Crazy8 from './images/crazy8.png';
import Mockup1 from './images/mockup1.png';
import Mockup2 from './images/mockup2.png';
import Mockup3 from './images/mockup3.png';
import Mockup4 from './images/mockup4.png';
import Wireframe1 from './images/wireframe1.png';
import Wireframe2 from './images/wireframe2.png';
import Hifi from './images/hifi.png';
import Mobile from './images/mobile.png';
import Tablet from './images/tablet.png';
import Desktop from './images/desktop.png';
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


const Uxdesign = () => {
    const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  const [ index, setIndex ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ xPosition, setXPosition ] = useState(0);

  const images = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19, I20, I21, I22, I23, I24, I25, I26];


  const handleClickPrevious = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };
const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

    return (
        <div>
            <br/>
            <br/>
            <br/>

            <h4> UX Design</h4>
            <br/>
            <h5>Currently in progress for certification...</h5>
      <br />
      <br />
          <br />
          <CoffeeLoading />
            <br/>
            <br/>
            <br/>
            <div className='whaleProject'>
                <br/>
            <p className='titleUX'> Whale Project</p>
            <br/>
            <p> Project Overview</p>
            <hr className='divider'/>
            <div className='projectOverview'>
                <div className='projectBlock'>
                    <p className='topic'>The Product</p>
                    <p> The Whale Project is a project that helps encourage 
                        people to take part in volunteer opportunities and in this
                        case taking part in whale conservation. Whale Project's target 
                        users includes college students and adults who are passionate about 
                        volunteering as well as networking with new individuals. 
                    </p>
                    <p className='topic'>Project Duration:</p>
                    <p>August 2021 to September 2021</p>
                </div>
                <div className='projectBlock'>
                    <p className='topic'>The problem</p>
                    <p> 
                        The percentage of volunteers in the United States is around 25%. The 
                        strategy team at Whale Project has identified there is a lack of general 
                        knowledge about conservation and limited understanding of locating 
                        volunteer opportunites in their community.
                    </p>
                    <p className='topic'>The goal</p>
                    <p>
                        Design an innovative app that attracts users, allow users to manage their volunteer
                        opportunities and inform users about whale conservation efforts.
                    </p>
                </div>
                <div className='projectBlock'>
                    <p className='topic'> My role: </p> 
                    <p> UX designer designing the Whale Project from conception to delivery</p>
                    <p className='topic'> Responsibilities: </p>
                    <p> Conducting interviews, paper wireframe to digital wireframe, low and high fidelity prototypes
                        conducting usability studies, accounting for accessibility, and iterating on designs.
                    </p>
                </div>
                <div className='projectBlock'>
                    <p className='topic'> User Research: Summary</p>
                    <p> I did some research on threats to the whale population as well as looking at the statistics to 
                        develop interview questions for participants. Most interview participants knew that the species has 
                        been declining but didn't know how to help or where to get started. The feedback given by the participants
                        showed that a interactive and informative tool will help users easily get informed as well as connect with the 
                        community through volunteering events.
                    </p>
      <img
        src={Persona1}
        style={{ width: 300, height: 150}}
      />

      <img
        src={Persona2}
        style={{ width: 300, height: 150}}
      />
      </div>
        <div className='projectBlock'>
                    <p className='topic'> Ideation</p>
                    <p> I did a quick ideation sketch with the method 'Crazy 8s'. My goal was to come up 
                        with ideas that would potentially provide users with easy access to information 
                        regarding whale conservation and allow users to be interactive.
                    </p>
      <img
        src={Crazy8}
        style={{ width: 450, height: 240}}
      />
      </div>
      <div className='projectBlock'>
                    <p className='topic'>Paper Wireframe</p>
                    <p>For the paper wireframe I sketched five potential screens for the mobile version and a final
                        sketch of the combined features I would like to include.</p> 
                    <img
        src={PaperWF}
        style={{ width: 450, height: 240}}
      />
                    <p className='topic'> Digital Wireframe</p>
                    <p> After ideation I started drafting a digital wireframe for desktop screens to prepare for usability testing.
                        The digital wireframe connected the user flow from searching a volunteer event to confirmation or RVSPing the event.
                    </p>
      <img
        src={Wire1}
        style={{ width: 450, height: 240}}
      />
      </div>
    </div>
    <div className='usability'>
        <div className='usability_sub'>
            <p className='topic'>Usability Study : Parameters</p>
            <p>Study type : unmoderated usability study</p>
            <p>Location : United States, Remote</p>
            <p>Participants: 5 participants</p>
            <p>Length: 20 minutes</p>
        </div>
    <div className='usability_sub'>
        <p className='topic'>Usability Study : Findings</p>
        <p> People wanted easier access to see volunteer events</p>
        <p> People wanted a comment box to ask for details and connect with others interested in the event.</p>
        <p> People wanted easier visibility for the rank standing and see their progress.</p>
    </div>
    <div>
    <div className='topics'>
    <p> Mockups</p>
    </div>
    <div className='mockups'>
    <div className='projectBlocks'>
    <img
        src={Wireframe1}
        style={{ width: 400, height: 400, padding:'10px'}}
      />    
       <p className='notes'><p className='topic'>Home page</p>For the homepage, I added some features that would correlate to the mobile version. Since the
       mobile version has a feature to scan QR codes, the website version would allow users to enter a code instead. 
       Also with highlighted some of the important buttons and displayed the ranking level for users to see.</p> 
    <img
        src={Mockup1}
        style={{ width: 400, height: 450, padding:'10px'}}
      />      
      </div>
      <div className='projectBlocks'>
        <img
        src={Wireframe2}
        style={{ width: 400, height: 650, padding:'10px'}}
      />    
       <p className='notes'><p className='topic'>Event Details Page</p>Placing the content and features at the center made it easier for user's to focus on everything on one page and 
       see all the details of the event. Also instead of placing borders around a comment box, I used a intuitive yet commonly used comment area 
       separated from the contents above with a line. </p> 
    <img
    src={Mockup3}
    style={{ width: 400, height: 650, padding:'10px'}}
  />
        {/* <img
      src={Mockup2}
      style={{ width: 400, height: 500, padding:'10px'}}
    />          
   <img
  src={Mockup4}
  style={{ width: 400, height: 400, padding:'10px'}}
/> */}

    </div>
    {/* <div className='mockupDescription'>
        <p> Hello world</p>
    </div> */}
    </div>
    <div className='projectBlocks'>
    <img
  src={Hifi}
  style={{ width: 300, height: 800, padding:'10px'}}
/>
<div className='hifi_Summary'>

<div className='acc_Container'>
<p className='topic'>High Fidelity Prototype</p>
<a
        href="https://www.figma.com/proto/ptiDGghbWpaYq9XOKawCA7/Endangered-Whales?node-id=111%3A453&scaling=min-zoom&page-id=111%3A452&starting-point-node-id=111%3A453"
        className='figma_link'
      >
        <p className='figma_link'>See Prototype on Figma</p>
      </a>
<br/>
<br/>
<p className='topic'>Accessibility Considerations</p>
<br />
<div className='acc1'>
    <p>1</p>
</div>
<div className='acc_desc'></div>
<p>Simple design with images and text to assist users.</p>
</div>
<div className='acc_Container'>
<div className='acc1'>
    <p>2</p>
</div>
<div className='acc_desc'>
<p>Utilizing color and font styles to improve user's journey as well as clear labels to be compatible with screen readers.</p>
</div>
</div>
</div>

    </div>
    <div className='responsive'>
        <div className='topics'>
    <p className='topic'>Responsive Designs</p>
    </div>
    <div className='responsive_Container'>
        <div className='responsive_Content'>
            <p className='topic'>Mobile</p>
            <img
  src={Mobile}
  style={{ width: 200, height: 400, padding:'10px'}}
/>
        </div>
        <div className='responsive_Content'>
            <p className='topic'>Tablet</p>
            <img
  src={Tablet}
  style={{ width: 300, height: 400, padding:'10px'}}
/>
        </div>
        <div className='responsive_Content'>
            <p className='topic'>Desktop</p>
            <img
  src={Desktop}
  style={{ width: 300, height: 450, padding:'10px'}}
/>
        </div>
    </div>
</div>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <p className='topic'>Snack Ordering App for Theaters</p>
   
      <Wrapper className = 'wrapper'>
    <Carousel 
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrevious={handleClickPrevious}
        handleClickNext={handleClickNext}
      />
      </Wrapper>
        </div>
    )
}

export default Uxdesign

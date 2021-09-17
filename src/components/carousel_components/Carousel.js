import React, {useRef, useEffect} from 'react'
import styled from 'styled-components';
import Buttons from './Button.js';

const Wrapper = styled.div`
  position: relative;
  width: 700px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;
const Slide = styled.div`
  display: flex;
  width: 700px;
  height: 450px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)

img {
    width: 700px;
    height: 100%;
  }
`;


function Carousel({ 
  images, 
  setWidth, 
  xPosition, 
  handleClickPrevious, 
  handleClickNext,
}) {
    const slideRef = useRef();

    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            setWidth(width);
        }
    }, [setWidth]);

    useEffect(() => {
        const handleAutoplay = setInterval(handleClickNext, 6000);
        return () => clearInterval(handleAutoplay);
      }, [handleClickNext]);

    return (
        <Wrapper>
            <Slide xPosition={xPosition} ref={slideRef}>
                {images.map((img, i) => (
                    <img src={img} alt={'images'} key={i}/>
                    
                ))}
            </Slide>
            <Buttons
        handleClickPrevious={handleClickPrevious}
        handleClickNext={handleClickNext}
      />
        </Wrapper>
    )
}

export default Carousel;

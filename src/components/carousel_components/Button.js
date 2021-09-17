import React from 'react';
import styled from 'styled-components';
import leftBtn from '../images/arrowBack.svg'; 
import rightBtn from '../images/arrowForward.svg'; 

const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;
function Buttons({ handleClickPrevious, handleClickNext }) {
  return (
    <>
      <Button src={leftBtn} side="prev" onClick={handleClickPrevious} />
      <Button src={rightBtn} side="next" onClick={handleClickNext} />
    </>
  );
}
export default Buttons;
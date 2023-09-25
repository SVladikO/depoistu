import styled, {keyframes} from "styled-components";
import {BORDER_RADIUS, COLOR, FONT, hexToRgbA} from "utils/theme";

const  myfirst = keyframes`
  0%   {top: -300px;}
  100% {top: 0;}
`;

const fadeOut = keyframes`
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 16px 16px;
  position: absolute;
  opacity: 1;
  top: 0;
  width: 100%;
  background: ${hexToRgbA('#000', 0.5)};
  z-index: 8;
  animation: ${myfirst} 2s, ${fadeOut} 1s ease-out;
  animation-direction: alternate;
  transition: opacity 2s ease-in-out;
`;

export const CloseAll = styled.button`
  ${FONT.SIZE_18};
  display: block;
  position: relative; 
  z-index: 10; 
  height: 40px;
  color: ${COLOR.ACCENT1};
  background: ${COLOR.WARNING2};
  border-radius: ${BORDER_RADIUS.CITY_POPUP};
  border: 1px solid #000;
  width: 100%;
  opacity: 1;
  animation: ${fadeOut} 1s ease-in-out;
`;

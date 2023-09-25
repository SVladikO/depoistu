import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT, hexToRgbA} from "utils/theme";


export const Wrapper = styled.div`
  padding: 16px 16px;
  position: absolute;
  top: 0;
  width: 100%;
  background: ${hexToRgbA('#000', 0.5)};
  z-index: 8;
  animation: myfirst 2s;
  animation-direction: alternate;
  transition: 0.5s ease-in;
  @keyframes myfirst {
    0%   {top: -300px;}
    100% {top: 0;}
  }
`;
export const CloseAll = styled.button`
  ${FONT.SIZE_18};
  display: block;
  position: relative; 
  z-index: 10; 
  height: 40px;
  color: ${COLOR.ACCENT4};
  background: ${hexToRgbA('#000', 0.85)};
  //background: ${COLOR.WARNING2};
  // border-radius: ${BORDER_RADIUS.CITY_POPUP};
  // border: 1px solid #000;
  width: 100%;
`;

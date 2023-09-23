import styled from "styled-components";
import {BORDER_RADIUS, COLOR, hexToRgbA} from "utils/theme";


export const Wrapper = styled.div`
  padding: 15px 6px 0;
  position: absolute;
  top: 45px;
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
  display: block;
  position: relative; 
  z-index: 10; 
  height: 40px;
  background: ${COLOR.WARNING2};
  border-radius: ${BORDER_RADIUS.CITY_POPUP};
  border: 1px solid #000;
  animation: myfirst 3s;
  transition: 0.5s ease-in;
`;

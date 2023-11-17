import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT, hexToRgbA} from "utils/theme";


export const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 100vh;
  padding: 16px;
  position: relative;
  top: 0;
  width: 100%;
  background: ${hexToRgbA('#000', 0.5)};
  z-index: 8;
  animation: myfirst 2s;
  animation-direction: alternate;

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
  width: 100%;
`;
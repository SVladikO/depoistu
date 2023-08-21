import styled from "styled-components";
import {hexToRgbA} from "../../utils/theme";


export const Wrapper = styled.div`
  padding: 15px 6px 0;
  position: absolute;
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

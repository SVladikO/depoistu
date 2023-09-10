import styled from "styled-components";
import {hexToRgbA} from "utils/theme";


export const Wrapper = styled.div`
  padding: 15px 6px 0;
  position: absolute;
  top: -15px;
  width: 100%;
  opacity: 0;
  background: ${hexToRgbA('#000', 0.5)};
  z-index: 8;
  animation: myfirst 4s;
  animation-direction: alternate;

  @keyframes myfirst {
    0% {
        top: -300px;
        opacity: 0
    }
    100% {
        opacity: 1;
        top: 0;
    }
  }
`;

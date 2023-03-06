import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 355px;
  max-width: 355px;
  min-height: 355px;
  max-height: 60vh;
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
  z-index: 100;

  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export const BackButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  font-size: 16px;
  color: ${COLOR.ACCENT5};
  margin: 0;
  
  & > svg {
    position: relative;
    top: 3px;
    left: -2px;
    height: 12px;
    fill: ${COLOR.ACCENT5};
  }
`;

export const CitiesWrapper = styled.div`
  
`;

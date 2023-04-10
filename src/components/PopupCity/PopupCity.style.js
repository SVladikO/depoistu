import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;
  min-width: 355px;
  max-width: 355px;
  min-height: 355px;
  max-height: 355px;
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
  z-index: 1;
  width: 100%;
  padding: 10px 10px 0;
  margin: 0;
  height: 43px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 11%);
  
  &:hover {
    cursor: pointer;
  }
`;

export const BackButtonInnerWrapper = styled.div`
  display: flex;
  align-items: start;
  font-size: 20px;
  line-height: 20px;
  color: ${COLOR.ACCENT5};
  padding: 0 0 10px;
  background: #fff;
  
  & > svg {
    position: relative;
    top: 3px;
    left: -2px;
    height: 17px;
    margin: 0 6px 0 0;
    fill: ${COLOR.ACCENT5};
  }
`;

export const CitiesWrapper = styled.div`
  padding: 0 10px 10px;
  width: 100%;
  overflow: auto;
  
  & > div:last-child {
    padding: 0;
  }
`;

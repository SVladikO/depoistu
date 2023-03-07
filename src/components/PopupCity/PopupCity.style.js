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
  max-height: 600px;
  overflow: hidden;
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND};
  z-index: 100;

  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export const BackButtonInnerWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: start;
  font-size: 20px;
  color: ${COLOR.ACCENT5};
  padding: 0 0 10px;
  background: #fff;
  
  &:hover {
    cursor: pointer;
  }

  & > svg {
    position: relative;
    top: 3px;
    left: -2px;
    height: 16px;
    width: 16px;
    margin: 0 4px 0 0;
    fill: ${COLOR.ACCENT5};
  }
`;

export const BackButtonWrapper = styled.div`
  height: 35px;
  margin: 0;
`;

export const CitiesWrapper = styled.div`
  overflow-y: scroll;
  padding: 0 10px 0 0;
  width: 104%;
  
  & > div:last-child {
    padding: 0;
  }
`;

import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const Wrapper = styled.div`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  max-height: 500px;
  background-color: ${COLOR.ACCENT9};
  border-radius: ${BORDER_RADIUS.CITY_POPUP};
  z-index: 100;
  margin: 0 24px;
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  background: ${COLOR.ACCENT9};
  
  &:hover {
    cursor: pointer;
  }
`;

export const CloseIconWrapper = styled.div`
  //position: absolute;
  //right: 0;
  //top: 0;
  height: 44px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
    & > svg {
      height: 13px;
      width: 13px;
      fill: ${COLOR.ACCENT1};
    }
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
  padding: 0 10px 0 20px;
  color: ${COLOR.ACCENT1};
  
  & > svg {
    position: relative;
    top: 3px;
    left: -2px;
    height: 17px;
    margin: 0 6px 0 0;
    fill: ${COLOR.ACCENT1};
  }
`;

export const CitiesWrapper = styled.div`
  //padding: 6px 12px 5px 10px;
  width: 100%;
  overflow: auto;
`;

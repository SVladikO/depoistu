import styled from "styled-components";
import {COLOR,BORDER_RADIUS, DEVICE_WIDTH, hexToRgbA} from "../../utils/theme";


export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 2;
  bottom: -1px;
  box-shadow: 0 0 22px ${hexToRgbA('#000', 0.08)};
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND} 0 0;
  display: flex;
  justify-content: space-around;
  min-width: ${DEVICE_WIDTH.MIN};
  width: 100%;
  max-width: ${DEVICE_WIDTH.MAX};

  & > a {
    width: 25%;
  }
  
  box-shadow: 0px -1px 4px 0px rgba(0,0,0,0.11);
  -webkit-box-shadow: 0px -1px 4px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 0px -1px 4px 0px rgba(0,0,0,0.11);
`;

export const MenuItem = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  color: ${p => p.selected ? COLOR.PRIMARY : COLOR.ACCENT1};
  & > *:first-child{
    width: 27px;
    height: 24px;
    display: block;
    margin-bottom: 5px;
    fill: ${p => p.selected ? COLOR.PRIMARY : COLOR.ACCENT1};
  }
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

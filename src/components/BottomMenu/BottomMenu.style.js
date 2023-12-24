import styled from "styled-components";
import {COLOR, BORDER_RADIUS, FONT} from "utils/theme";

export const Wrapper = styled.div`
  z-index: 2;
  bottom: -1px;
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND} 0 0;
  display: flex;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }

  & > a {
    width: 25%;
  }
  
  box-shadow: 0 -1px 4px 0 rgba(0,0,0,0.11);
  -webkit-box-shadow: 0 -1px 4px 0 rgba(0,0,0,0.11);
  -moz-box-shadow: 0 -1px 4px 0 rgba(0,0,0,0.11);
`;

export const MenuItem = styled.div`
    height: 80px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
    color: ${p => p.selected ? COLOR.PRIMARY : COLOR.ACCENT1};

    & > *:first-child {
        width: 27px;
        height: 24px;
        display: block;
        margin-bottom: 5px;
        fill: ${p => p.selected ? COLOR.PRIMARY : COLOR.ACCENT1};
    }
`;

export const OrderWrapper = styled.div`
    position: relative;
`;

export const OrderButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 54px;
    width: 54px;
    top: -10px;
    left: -27px;
    position: absolute;
    background: ${COLOR.ACCENT2};
    border: solid 1px ${COLOR.ACCENT1};
    ${FONT.SIZE_30}
    ${FONT.WEIGHT_700}
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

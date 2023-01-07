import styled from "styled-components";
import {COLOR,BORDER_RADIUS} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";


export const Wrapper = styled.div`
  box-shadow: 0 0 22px ${hexToRgbA('#000', 0.08)};
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND} 0 0;
  padding: 14px 25px 15px 25px;
  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const MenuItem = styled.div`
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

export const PurchaseCounter = styled.div`
  top: -3px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  position: absolute;
  background-color: ${COLOR.PRIMARY};
  color: ${COLOR.ACCENT4};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`


export const Label = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

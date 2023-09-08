import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const Wrapper = styled.div`
  position: relative;
  
  & > svg {
    fill: ${p => p.selected ? COLOR.PRIMARY : COLOR.ACCENT1};
  }
  
  & > div {
    background-color: ${p => p.selected ? COLOR.ACCENT1 : COLOR.PRIMARY};
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
  color: ${COLOR.ACCENT4};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`
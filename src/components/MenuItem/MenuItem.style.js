import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
  position: relative;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  background: ${p => p.isVisibleForCustomers ? COLOR.ACCENT4 : COLOR.ACCENT7};
  border-radius: ${BORDER_RADIUS.MENU_ITEM};
  border-bottom: solid 1px ${COLOR.ACCENT9};
  display: flex;
  flex-direction: column;  

  svg {
    width: 25px;
    height: 25px;
  }
  transition: background-color 0.5s;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const NewFlag = styled.div`
    ${FONT.SIZE_14};
    position: absolute;
    padding: 5px 12px;
    background-color: ${COLOR.ACCENT3};
    color: ${COLOR.ACCENT4};
    z-index: 2;
`

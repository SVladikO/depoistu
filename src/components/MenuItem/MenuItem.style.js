import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
  position: relative;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  background: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.MENU_ITEM};
  border: solid 1px ${COLOR.ACCENT9};
  display: flex;
  flex-direction: column;  
  
  svg {
    width: 25px;
    height: 25px;
  }
  background-color: ${({isVisible}) => isVisible ? 'none': COLOR.ERROR2};
  transition: background-color 0.5s;
`

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    
`

export const FoodImg = styled.img`
  width: 100%;
`

export const FoodImage = styled.img`
    width: 100%;
    background: ${COLOR.ACCENT2};
    border: solid 1px ${COLOR.ACCENT4};
    position: relative;

    & > img {
        width: 80px;
        height: 80px;
        border-radius: ${BORDER_RADIUS.CIRCLE};
    }

    svg {
        position: absolute;
        top: 0;
        right: 0;
        width: 12px;
        height: 12px;
        color: ${COLOR.ACCENT5};
    }
`;

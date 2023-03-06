import styled from "styled-components";
import {COLOR, GRADIENT, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 10px 0;
  width: 97px;
  height: 100px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  background: ${COLOR.ACCENT4};

  &:active {
    background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
    
    div:first-child {
      background: ${COLOR.ACCENT4};
    } 
    div:last-child {
      color: ${COLOR.ACCENT4};
    }
  }
`;
export const Title = styled.div`
  color: ${COLOR.ACCENT3};
  font-size: 12px;
  font-weight: 700;
  margin: 6px 0 0;
  text-align: center;
  line-height: 14px;
`;

export const IconWrapper = styled.div`
  background: ${COLOR.ACCENT2};

  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 55px;
  height: 55px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
  svg {
    width: 42px;
    height: 42px;
  }
`;
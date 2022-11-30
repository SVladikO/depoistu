import styled from "styled-components";
import {COLOR, GRADIENT, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 23px 0;
  width: 155px;
  height: 155px;
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
  color: ${COLOR.ACCENT1};
  font-size: 28px;
  margin: 10px 0 0;
  text-align: center;
  line-height: 34px;
  
`;

export const IconWrapper = styled.div`
  background: ${COLOR.ACCENT2};

  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 75px;
  height: 75px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
  
`;
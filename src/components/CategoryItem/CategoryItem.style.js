import styled from "styled-components";
import {COLOR, GRADIENT, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 23px 0;
  width: 155px;
  height: 155px;
  border-radius: ${BORDER_RADIUS.SECOND};
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
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0 0;
  text-align: center;
  line-height: 24px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  
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
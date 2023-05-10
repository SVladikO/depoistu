import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 0 0 10px auto;
  
  & > svg {
    fill: ${COLOR.ACCENT1};
  }
`;
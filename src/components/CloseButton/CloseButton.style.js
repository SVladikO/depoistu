import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  
  & > svg {
    fill: ${COLOR.ACCENT1} !important;
  }
`;
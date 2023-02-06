import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  height: 355px;
  background-color: ${COLOR.ACCENT4};
  padding: 10px;
  display: flex;
  position: fixed;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
  svg {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;
export const Image = styled.img`
  max-width: 336px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;
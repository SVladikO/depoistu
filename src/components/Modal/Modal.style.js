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
  img {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
`;

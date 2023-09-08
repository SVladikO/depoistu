import styled from 'styled-components';
import {BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
  * > div {
    margin: 0 0 20px 0;
  }
`;



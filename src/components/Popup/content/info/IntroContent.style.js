import styled from 'styled-components';
import {BORDER_RADIUS} from "../../../../utils/theme";

export const Wrapper = styled.div`
  min-width: 355px;
  max-width: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
`;

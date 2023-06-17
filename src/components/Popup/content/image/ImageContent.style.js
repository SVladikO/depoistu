import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../../../utils/theme";

export const Wrapper = styled.div`
  min-height: 355px;
  max-height: 355px;
  background-color: ${COLOR.ACCENT4};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
`;
export const Image = styled.img`
  min-width: 335px;
  min-height: 335px;
  max-width: 335px;
  max-height: 335px;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;

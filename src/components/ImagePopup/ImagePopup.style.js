import styled from 'styled-components';
import {BORDER_RADIUS, COLOR, DEVICE_WIDTH} from "../../utils/theme";

export const InvisibleWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Wrapper = styled.div`
  min-width: ${DEVICE_WIDTH.MIN_WITH_PADDING};
  min-height: ${DEVICE_WIDTH.MIN_WITH_PADDING};
  max-height: 100%;
  margin: 10px;
  background-color: ${COLOR.ACCENT4};
  padding: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
export const Image = styled.img`
  max-width: 75%;
  border-radius: ${BORDER_RADIUS.CIRCLE};
`;
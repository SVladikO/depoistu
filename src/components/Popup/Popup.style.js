import styled from "styled-components";
import {COLOR, DEVICE_WIDTH} from "utils/theme";

export const InvisibleWrapper = styled.div`
  min-width: ${DEVICE_WIDTH.MIN};
  background: rgba(0, 0, 0, 0.9);
  box-shadow: none;
  position: fixed;
  min-height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: ${p => p.popupPosition};
  z-index: 100;
`;

export const Wrapper = styled.div`
  min-height: 80vh;
  max-height: 80vh;
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  margin: ${p => p.margin || 0};
  ${p => p.popupPosition === 'end' && 'border-radius: 28px 28px 0 0'};
  ${p => p.popupPosition === 'end' && 'background: white'};
  
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  -webkit-box-pack: end;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 14px;
    height: 14px;
    fill: ${COLOR.ACCENT1} !important;
  }
`;

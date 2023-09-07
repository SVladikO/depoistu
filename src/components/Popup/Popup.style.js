import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const InvisibleWrapper = styled.div`
  background: rgba(0, 0, 0, 0.9);
  box-shadow: none;
  position: fixed;
  min-height: 100vh;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: ${p => p.position};
  z-index: 20;
`;

export const Wrapper = styled.div`
  min-width: 375px;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  position: relative;
  ${p => p.position === 'end' && 'overflow: hidden'};
  ${p => p.position === 'end' && 'padding: 40px 23px 40px'};
  ${p => p.position === 'end' && 'border-radius: 28px 28px 0 0'};
  ${p => p.position === 'end' && 'background: white'};
  
  
  
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  right: 17px;
  top: 14px;

  width: 14px;
  height: 14px;

  & > svg {
    fill: ${COLOR.ACCENT1} !important;
  }
`;

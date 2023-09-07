import styled from "styled-components";

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
  border-radius: 28px 28px 0 0;
  overflow: hidden;
  padding: 12px 23px 0;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

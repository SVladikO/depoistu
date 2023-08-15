import styled from "styled-components";

export const InvisibleWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  min-height: 100vh;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const Wrapper = styled.div`
  min-width: 355px;
  max-width: 355px;
  display: flex;
  flex-direction: column;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 0 10px;
`;

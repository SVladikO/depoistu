import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
`;

export const Label = styled.label``;

export const GroupWrapper = styled.div`
  min-width: 60px;
  display: flex;
  align-items: center;
  gap: 10px;

  & > .pma-input {
    max-width: 62px;
  }
`

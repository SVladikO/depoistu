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
  padding: 5px;
  & > .pma-input {
    max-width: 62px;
  }
`

export const Weekend = styled.div`
  height: 50px;
  width: 260px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

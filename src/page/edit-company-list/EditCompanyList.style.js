import styled from "styled-components";

export const Wrapper = styled.div``;

export const EditBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  margin: 10px auto 10px auto;
  
  & > * {
    display: flex;
    flex: 1;
  }
  & button {
    flex: 1;
  }
`;


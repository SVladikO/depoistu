import styled from "styled-components";

export const EditBar = styled.div`
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 27px;
  
  & > * {
    display: flex;
    flex: 1;
  }
  & button {
    flex: 1;
  }
`;


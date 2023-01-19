import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin: 15px 0 0;
  }
  
  & > div:first-child {
    margin: 0;
  }
`;

export const Content = styled.div`
`;


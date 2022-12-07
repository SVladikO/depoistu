import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin: 15px 0 0;
  }
  
  & > div:first-child,
  & > div:nth-child(2) {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 325px;
  margin: 0 auto;
`;


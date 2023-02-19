import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > a {
    margin: 15px 0 0;
  }
  
  & > a:first-child,
  & > a:nth-child(2) {
    margin: 0;
  }
`;

export const Content = styled.div`
  width: 325px;
  margin: 0 auto;
`;


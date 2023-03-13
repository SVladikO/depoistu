import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .swiper-slide {
    flex-shrink: 100 !important;
    width: 97px;
    height: 100px;
  }
  
  & > a {
    margin: 15px 0 0;
  }
  
  & > a:first-child,
  & > a:nth-child(2) {
    margin: 0;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
`;


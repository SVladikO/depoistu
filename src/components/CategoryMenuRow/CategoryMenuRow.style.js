import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .swiper{
    display: flex;
    width: 100%;
  }
  .swiper-slide {
    flex-shrink: 100 !important;
    width: 97px;
    height: 100px;
  }
  .swiper-slide-active{
    text-align: left;
    flex-shrink: 0 !important;
    min-width: 97px;
    max-width: 97px;
    object-fit: cover;
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


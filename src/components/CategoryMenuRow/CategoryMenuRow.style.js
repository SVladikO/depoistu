import styled from "styled-components";

export const TopCategoryWrapper = styled.div`
  display: flex;
`;
export const TopCategoryItem = styled.div`
    padding: 10px;
  `;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .swiper{
    display: flex;
    width: 100%;
    padding: 2px;
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


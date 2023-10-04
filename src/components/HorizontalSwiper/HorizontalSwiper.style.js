import styled from "styled-components";

export const SliderStyle = styled.div`
  .swiper {
    display: flex;
    width: 100%;
    padding: 0 0 14px 0;
  }

  .swiper-wrapper {
    padding: 0;
  }
  
  .swiper-slide {
    & > div {
      padding: 10px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
import styled from "styled-components";

export const SliderStyle = styled.div`
  .swiper {
    display: flex;
    width: 100%;
    padding: ${p => p.sliderStylePadding};
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
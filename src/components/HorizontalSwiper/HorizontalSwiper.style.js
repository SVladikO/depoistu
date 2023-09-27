import styled from "styled-components";

export const SliderStyle = styled.div`
  //height: 36px;

  .swiper {
    display: flex;
    width: 100%;
    padding: 0 0 10px 0;
  }

  .swiper-slide {
    //width: auto !important;
    //min-width: 100px;
    & > div {
      padding: 10px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
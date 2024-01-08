import styled from "styled-components";
import {COLOR, hexToRgbA} from "../../utils/theme";

export const ImageSection = styled.div`
  display: flex;
  height: 280px;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    //height: 100%;
  }
    
    .swiper-pagination {
        background: ${hexToRgbA(COLOR.ACCENT1, 0.4)};
        padding: 0 0 6px;
        bottom: 0;
    }

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: ${COLOR.ACCENT4};
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background-color: ${COLOR.ACCENT1};
    }
`;
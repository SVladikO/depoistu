import styled from "styled-components";
import {COLOR,BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  border-radius: ${BORDER_RADIUS.SECOND};
  height: 262px;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background-color: ${COLOR.ACCENT4};
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    background-color: ${COLOR.PRIMARY};
  }
`;

export const ImageSection = styled.div`
  display: flex;
  height: 200px;
  max-height: 200px;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  margin: 10px auto 10px 10px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
`;

export const Address = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;

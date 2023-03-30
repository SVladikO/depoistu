import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 18px 10px 10px 10px;

  & > * {
    margin: 0 0 10px 0;
  }
`;

export const InstitutionPictures = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  margin: 0 0 10px 0;
  .swiper-slide-active{
    flex-shrink: 0!important;
    min-width: 178px;
  }
  .swiper-slide{
    img{
      max-width: 178px;
      border-radius: ${BORDER_RADIUS.FOURTH};
      max-height: 100px;
      min-height: 100px;
      min-width: 178px;
      position: relative;
      object-fit: cover;
    }
  }
`;

export const Divider = styled.div`
  margin: 5px auto 10px auto;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT5};
`;

export const InstitutionBasketButton = styled.div`
  width: 31px;
  height: 34px;
  background: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 148px;
`;

export const BottomSection = styled.div`
  margin: 84px 0 0 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  & > * {
    margin: 0 0 15px 0;
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

export const WarningText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${COLOR.ACCENT6};
  max-width: 200px;
  margin: 0 auto 5px auto;
`;

export const Reference = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  & > a {
    color: ${COLOR.ACCENT1};
  }
  * > svg {
    color: ${COLOR.ACCENT1};
    fill-opacity: 1;
    display: inline-block;
    margin: 2px 0 -2px 7px;
  }
`;

export const BottomSection = styled.div`
  margin: 84px 0 0 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
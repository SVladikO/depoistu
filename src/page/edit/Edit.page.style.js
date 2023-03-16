import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";
import {PrimaryWideButton} from "../../components";

export const Wrapper = styled.div`
    padding: 18px 10px 10px 10px;
`;

export const Pictures = styled.div`
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

export const BasketButton = styled.div`
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
export const MenuItemEditor = styled.div`
  padding: 10px;
  background: ${COLOR.ACCENT4};
  & input {
    margin: 0 0 15px 0;
  }
`;
export const IconSide = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0 0 15px 0;
`;
export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
export const ImagePlace = styled.div`
  width: 90px;
  height: 90px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 5px;
`;
export const EditButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 162px;
  height: 45px;
  background: ${hexToRgbA(COLOR.ACCENT3, 0.11)};
  color:${COLOR.ACCENT3};
  border-radius: ${BORDER_RADIUS.FOURTH};
`;

export const WideButton = styled(PrimaryWideButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    margin: 0 0 0 3px;
    color: ${COLOR.ACCENT4};
    width: 12px;
    height: 13px;
  }
`;

export const BottomSection = styled.div`
  margin: 84px 0 0 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
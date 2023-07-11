import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const TopCategoryWrapper = styled.div`
  display: flex;
  gap: 30px;

`;

export const BottomLine = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid rgb(181, 181, 181);
  bottom: -28px;
  z-index: 0;
`;
export const TopCategoryItem = styled.div`
  z-index: 1;
  color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT5};
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 6px;
  border-bottom: solid 2px ${p => p.isSelected ? COLOR.ACCENT3 : ''};;
`;

export const SliderStyle = styled.div`
  height: 36px;

  .swiper {
    display: flex;
    width: 100%;
    padding: 0 0 10px 0;
  }

  .swiper-slide {
    width: auto !important;
    min-width: 100px;
  }
`;

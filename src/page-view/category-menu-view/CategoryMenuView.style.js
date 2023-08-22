import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {ContentContainerDefault} from "../../components/ContentContainer/ContentContainer.style";

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
  border-bottom: solid 2px ${p => p.isSelected ? COLOR.ACCENT3 : ''};
`;

export const Wrapper = styled.div`
  ${ContentContainerDefault};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  padding: 8px 8px 0;
  margin: 0;
  z-index: 10;
`;
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
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

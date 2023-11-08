import styled from "styled-components";
import {COLOR, FONT, GRADIENT, hexToRgbA} from "utils/theme";
import {ContentContainerDefault} from "components/ContentContainer/ContentContainer.style";

export const SubCategoryWrapper = styled.div`
  padding: 8px 2px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  margin: 0;
  z-index: 10;
  height: 58px;
  background: none;
`;
export const BgWrapper = styled.div`
  overflow: hidden;
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
`;
export const TopCategoryItem = styled.div`
  height: 50px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  z-index: 1;
  color: ${COLOR.ACCENT1};
  ${FONT.SIZE_18};
  padding: 10px 14px 20px;
  border-bottom: solid 3px ${p => p.isSelected ? COLOR.ACCENT3 : COLOR.ACCENT4};
  color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT1};
  background: ${p => p.isSelected ? COLOR.ACCENT4 : 'none'};
`;

export const CategoryTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  padding: 22px 0 16px 16px;
  color: ${hexToRgbA(COLOR.ACCENT1, 0.7)};
  //background: rgb(0 0 0 / 70%);
`;




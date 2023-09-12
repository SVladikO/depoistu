import styled from "styled-components";
import {COLOR, GRADIENT, hexToRgbA} from "utils/theme";
import {ContentContainerDefault} from "components/ContentContainer/ContentContainer.style";

export const SubCategoryWrapper = styled.div`
  ${ContentContainerDefault};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0;
  margin: 0;
  z-index: 10;
  height: 56px;
  background: none;
`;
export const BgWrapper = styled.div`
  background: ${COLOR.ACCENT1};
  overflow: hidden;
  //background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});  
`;
export const TopCategoryWrapper = styled.div`
  display: flex;
  //background: ${COLOR.ACCENT4};
  
`;
export const TopCategoryItem = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  color: ${COLOR.ACCENT1};
  font-size: 20px;
  padding: 10px 14px;
  color: ${p => p.isSelected ? COLOR.ACCENT4 : COLOR.ACCENT1};
  background: ${p => p.isSelected ? 'none' : COLOR.ACCENT4};
`;

export const CategoryTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  padding: 22px 0 16px 16px;
  color: ${hexToRgbA(COLOR.ACCENT1, 0.7)};
  //background: rgb(0 0 0 / 70%);
`;




import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {ContentContainerDefault} from "../../components/ContentContainer/ContentContainer.style";

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
`;
export const TopCategoryWrapper = styled.div`
  display: flex;
  background: ${COLOR.ACCENT7};
`;
export const TopCategoryItem = styled.div`
  cursor: pointer;
  z-index: 1;
  color: ${COLOR.ACCENT1};
  font-size: 20px;
  font-weight: bold;
  padding: 10px 14px;
  border-bottom: solid 2px ${p => p.isSelected ? COLOR.PRIMARY : COLOR.ACCENT7};
`;
export const BottomLine = styled.div`
  position: relative;
  width: 100%;
  bottom: -28px;
  z-index: 0;
`;

export const CategoryTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT4};
  padding: 16px 0 12px 10px;
  background: rgb(0 0 0 / 70%);
`;




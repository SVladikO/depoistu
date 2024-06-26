import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const BgWrapper = styled.div`
  overflow: hidden;
  background: ${COLOR.ACCENT1};
  border-top: solid 1px ${COLOR.ACCENT5};
`;
export const TopCategoryItem = styled.div`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  height: 46px;
  display: flex;
  align-items: baseline;
  cursor: pointer;
  z-index: 1;
  color: ${COLOR.ACCENT1};
  ${FONT.SIZE_16};
  padding: 10px 14px 20px;
  border-bottom: solid 3px ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.WHITE};
  color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT1};
  ${p => p.isSelected ? FONT.WEIGHT_600 : FONT.WEIGHT_400};
  background: ${p => p.isSelected ? COLOR.WHITE : 'none'};
`;

export const SubCategoryWrapper = styled.div`
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  padding: 6px 2px;
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






import styled from "styled-components";
import {COLOR, FONT, GRADIENT, hexToRgbA} from "utils/theme";

export const BgWrapper = styled.div`
    overflow: hidden;
    background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
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
    border-bottom: solid 3px ${p => p.isSelected ? COLOR.ACCENT3 : COLOR.ACCENT4};
    color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT1};
    ${p => p.isSelected ? FONT.WEIGHT_600 : FONT.WEIGHT_400};
    background: ${p => p.isSelected ? COLOR.ACCENT4 : 'none'};
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

export const TopCategory = styled.div`
    padding: 30px 0 10px;
    display: flex;
    justify-content: center;
    ${FONT.SIZE_24};
    color: ${COLOR.ACCENT1};
    background: ${COLOR.ACCENT4};
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
`;
export const MenuItemGroupWrapper = styled.div`
    display: ${p => p.isOpen ? 'block' : 'none'};
    overflow: hidden;
  
`;
export const SubCategoryTitle = styled.div`
    height: ${p => p.isHidden ? '0px' : 'auto'};
    font-size: 20px;
    line-height: 24px;
    padding: ${p => p.isHidden ? '0px' : '22px 0 16px 16px'};
    color: ${hexToRgbA(COLOR.ACCENT1, 0.7)};
    border-bottom: solid 1px ${COLOR.ACCENT5};
    background: ${COLOR.ACCENT2};
    position: -webkit-sticky;
    position: sticky;
    top: 72px;
    z-index: 1;
`;




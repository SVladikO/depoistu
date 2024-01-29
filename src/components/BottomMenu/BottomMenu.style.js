import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
    z-index: 2;
    bottom: -1px;
    height: 60px;
    background-color: ${COLOR.WHITE};
    display: flex;
    justify-content: space-around;

    &:hover {
        cursor: pointer;
    }

    & > a {
        width: 25%;
    }

    box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.11);
`;

export const MenuItem = styled.div`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    align-items: center;
    position: relative;
    margin-top: 4px;
    color: ${p => p.selected ? COLOR.ACCENT1 : COLOR.ACCENT5};

    & > *:first-child {
        width: 23px;
        height: 23px;
        display: block;
        fill: ${p => p.selected ? COLOR.ACCENT1 : COLOR.ACCENT5};
    }
  
    span {
      ${FONT.SIZE_18};
    }
`;

export const OrderWrapper = styled.div`
    position: relative;
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OrderButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 52px;
    width: 52px;
    top: -10px;
    position: absolute;
    color: ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT5};
    background: ${COLOR.WHITE};
    border: solid 1px ${p => p.isSelected ? COLOR.ACCENT1 : COLOR.ACCENT5};
    ${FONT.SIZE_30}
    ${FONT.WEIGHT_700}
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
`;


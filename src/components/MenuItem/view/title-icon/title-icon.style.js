import styled from "styled-components";
import {COLOR, FONT, hexToRgbA} from "utils/theme";
import {SecondaryButton} from "../../../Buttons/SecondaryButton";

export const FirstRow = styled.div`
    position: relative;

    & > svg {
        cursor: pointer;
        position: absolute;
        top: -4px;
        right: 0;
        width: 40px;
        height: 40px;
        padding: 0 0 10px 20px;
        fill: ${COLOR.ACCENT1};
    }
`;

export const FoodTitle = styled.div`
    ${FONT.SIZE_20};
    ${FONT.WEIGHT_600};
    color: ${COLOR.ACCENT1};
    padding: 0 38px 0 0;
    display: flex;
    flex-wrap: wrap;
    word-break: break-word;
`;
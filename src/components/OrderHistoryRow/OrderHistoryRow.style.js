import styled from "styled-components";
import {COLOR, FONT} from "../../utils/theme";

export const Wrapper = styled.div`
    padding: 16px 0;
    color: ${COLOR.ACCENT1};
    background: ${COLOR.WHITE};
    border-bottom: solid 1px ${COLOR.ACCENT9};
`;

export const FirstRow = styled.div`
    ${FONT.SIZE_20};
    ${FONT.WEIGHT_500};
    display: flex;
    justify-content: space-between;
`;

export const SecondRow = styled.div`
    ${FONT.SIZE_18};
    display: flex;
    justify-content: end;
    margin: 8px 0 0;
`;
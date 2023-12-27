import styled from "styled-components";
import {COLOR, FONT} from "../../utils/theme";

export const Wrapper = styled.div`
    padding: 16px;
    color: ${COLOR.ACCENT1};
    background: ${COLOR.ACCENT4};
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
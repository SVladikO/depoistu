import styled from "styled-components";
import {COLOR, FONT, hexToRgbA} from "utils/theme";

export const Description = styled.div`
    ${FONT.SIZE_18};
    ${FONT.WEIGHT_400};
    color: ${hexToRgbA(COLOR.ACCENT1, 0.9)};;
    margin-top: 10px;
`;

export const SeeMore = styled.span`
    display: inline;
    cursor: pointer;
    ${FONT.WEIGHT_600};

    &:hover {
        text-decoration: underline;
    }
`;

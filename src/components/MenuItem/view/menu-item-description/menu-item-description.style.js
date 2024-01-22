import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const Description = styled.div`
    ${FONT.SIZE_18};
    ${FONT.WEIGHT_400};
    margin-top: 10px;
`;

export const SeeMore = styled.span`
    display: inline;
    cursor: pointer;
    color: ${COLOR.ACCENT1};
    ${FONT.WEIGHT_600};

    &:hover {
        text-decoration: underline;
    }
`;

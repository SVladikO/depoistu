import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";
import {SecondaryButton} from "../../../Buttons/SecondaryButton";

export const SizePriceWrapper = styled.div`
    display: flex;
    justify-content: left;
    padding: 14px 0 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

export const FirstRow = styled.div`
    position: relative;

    & > svg {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        padding: 5px;
    }

    & > svg:hover {
        cursor: pointer;
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

export const Description = styled.div`
    ${FONT.SIZE_16};
    ${FONT.WEIGHT_400};
    margin-top: 8px;
`;

export const NewFlag = styled.div`
    ${FONT.SIZE_14};
    position: absolute;
    padding: 5px 12px;
    background-color: ${COLOR.ACCENT3};
    color: ${COLOR.ACCENT4};
    z-index: 2;
`
export const SeeMore = styled.span`
    display: inline;
    cursor: pointer;
    color: ${COLOR.ACCENT1};
    ${FONT.WEIGHT_600};
    ${FONT.SIZE_14};

    &:hover {
        text-decoration: underline;
    }
`;

export const SpanWeight600 = styled.span`
    ${FONT.WEIGHT_600};
`;
export const Table = styled.table`
    width: 100%;
`;

export const SizePriceTd = styled.td`
    ${FONT.SIZE_20};
    color: ${COLOR.ACCENT1};
    padding: 5px 0;
`;

export const ControlButtonTd = styled(SizePriceTd)`
    width: 55%;
`;

export const AddButtonWrapper = styled.div`
    display: flex;
    justify-content: right;
    
    & > span {
        margin: 0 10px;
    }
`;

export const AmountWrapper = styled.div`
    width: 40px;
    display: flex;
    justify-content: center;
`;

export const AddButton = styled(SecondaryButton)`
    height: 22px;
    ${FONT.SIZE_16};
    padding: 10px 20px;
`

export const DecrementButton = styled(SecondaryButton)`
    height: 22px;
    ${FONT.SIZE_16};
    padding: 10px 20px;
    color: ${COLOR.ACCENT5};
    border-color: ${COLOR.ACCENT5};
    background: ${COLOR.ACCENT9};
`

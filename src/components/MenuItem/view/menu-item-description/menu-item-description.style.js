import styled from "styled-components";
import {COLOR, FONT, hexToRgbA} from "utils/theme";
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

export const Table = styled.table`
    width: 100%;
`;

export const Details = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${FONT.SIZE_20};
  color: ${COLOR.ACCENT1};
`

export const SizePriceInfo = styled.td`
  display: grid;
  grid-template-columns: 1fr 25px 1fr;
  width: 160px;
  
  span {
    padding: 5px 0;
    
    &:nth-child(1) {
      ${FONT.WEIGHT_600};
    }
  }
`

export const ControlButtonTd = styled.td`
  display: ${p => p.isShow ? 'flex': 'none'};
  justify-content: end;
  align-items: center;
  gap: 6px;
`

export const Amount = styled.div`
  width: 20px;
  text-align: center;
`

export const DecrementButton = styled(SecondaryButton)`
  height: 22px;
  ${FONT.SIZE_16};
  background-color: ${COLOR.ACCENT2};
  border: 1px solid ${COLOR.ACCENT5};

  &::before {
    content: '-'
  }

  &:active {
    border: 2px solid red;
    color: red;
    background: red;
  }
`

export const IncrementButton = styled(SecondaryButton)`
    height: 22px;
    ${FONT.SIZE_16};

  &::before {
    content: '+'
  }
`

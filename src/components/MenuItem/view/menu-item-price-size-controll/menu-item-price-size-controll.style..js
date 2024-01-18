import styled from "styled-components";
import {COLOR, FONT, hexToRgbA} from "utils/theme";
import {SecondaryButton} from "../../../Buttons/SecondaryButton";

export const SizePriceWrapper = styled.div`
    display: flex;
    justify-content: left;
    padding: 10px 0 0;
`;

export const Description = styled.div`
    ${FONT.SIZE_18};
    ${FONT.WEIGHT_400};
    margin-top: 8px;
`;

export const Table = styled.table`
    width: 100%;
`;

export const Details = styled.tr`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  ${FONT.SIZE_18};
  color: ${COLOR.ACCENT1};
`

export const SizePriceInfoTd = styled.td`
  display: grid;
  grid-template-columns: 70px 10px 1fr;
  width: 180px;
  
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
  gap: 8px;
`

export const Amount = styled.div`
  width: 20px;
  text-align: center;
`

export const DecrementButton = styled(SecondaryButton)`
  height: 24px;
  ${FONT.SIZE_18};
  background-color: ${COLOR.ACCENT2};
  border: 2px solid ${COLOR.ACCENT5};
  color: ${COLOR.ACCENT5};

  &::before {
    content: '-'
  }

  &:active {
    border: 2px solid ${COLOR.ACCENT5};
    background: ${hexToRgbA(COLOR.ACCENT5, 0.4)};
  }
`

export const IncrementButton = styled(SecondaryButton)`
    height: 24px;
    ${FONT.SIZE_18};

  &::before {
    content: '+'
  }
`

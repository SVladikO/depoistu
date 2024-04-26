import styled from "styled-components";
import {COLOR, FONT, hexToRgbA, lighterDarkerColor} from "utils/theme";
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
  grid-template-columns: 76px 8px 150px;
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
  gap: 6px;
`

export const Amount = styled.div`
  width: ${p => p.isWide ? '35px': '20px'};
  text-align: center;
`

export const CalculationButton = styled(SecondaryButton)`
    background: ${p => p.isDisabled ? hexToRgbA(COLOR.ACCENT5, 0.01) : hexToRgbA(COLOR.ACCENT1, 0.09)};
    border: 2px solid ${p => p.isDisabled ? COLOR.ACCENT5 : COLOR.ACCENT1};
    color: ${COLOR.ACCENT1};

    &:active {
      border: 2px solid ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -20) : lighterDarkerColor(COLOR.ACCENT1, -20)};
      color: ${p => p.isDisabled ? lighterDarkerColor(COLOR.ACCENT5, -20) : lighterDarkerColor(COLOR.ACCENT1, -20)};
      background: ${p => p.isDisabled ? hexToRgbA(COLOR.ACCENT5, 0.04) : hexToRgbA(COLOR.ACCENT1, 0.2)};
    }

    height: 24px;
    ${FONT.SIZE_18};
`

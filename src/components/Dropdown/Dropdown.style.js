import styled from "styled-components";
import {BORDER_RADIUS, COLOR, FONT, hexToRgbA, lighterDarkerColor, SHADOW} from "utils/theme";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid ${COLOR.ACCENT1};
  border-radius: ${BORDER_RADIUS.INPUT};
`;

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${p => p.isOpen ? '49px' : '50px'};
  padding: ${p => p.isOpen ? '8px 10px 10px 9px' : '10px'};
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${COLOR.ACCENT1};
  border-radius: ${BORDER_RADIUS.INPUT};

  svg {
    display: inline-block;
    transform: rotate(${p => p.isOpen ? 0 : '180deg'});
    transition: transform 0.2s;
    color: ${COLOR.ACCENT5};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 106%;
  left: 0;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  z-index: 3;
  background-color: ${COLOR.WHITE};
  border-radius: ${BORDER_RADIUS.INPUT};
  ${SHADOW};
`;

export const GroupTitleOption = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  color: ${COLOR.ACCENT1};
  background: ${COLOR.ACCENT9};
  border-top: solid 1px ${lighterDarkerColor(COLOR.ACCENT9, -20)};
  padding: 8px;
  cursor: pointer;
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_500};
  text-transform: uppercase;

`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  ${FONT.SIZE_16};
  color: ${COLOR.ACCENT1};
  display: flex;
  justify-content: flex-start;
  background-color: ${p => p.isSelected ? hexToRgbA(COLOR.PRIMARY, 0.2) : ''};

  &:hover {
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};
  }
`;
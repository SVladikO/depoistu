import styled from "styled-components";
import {COLOR, hexToRgbA, SHADOW} from "../../utils/theme";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: ${COLOR.ACCENT2};
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
  transition: all 0.2s;
  svg {
    display: inline-block;
    transform: rotate(${p => p.isOpen ? 0 : '180deg'});
    transition: transform 0.2s; 
    color: ${COLOR.ACCENT5};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  z-index: 2;
  background-color: ${COLOR.ACCENT4};
  ${SHADOW};
`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
  border-bottom: solid 0.1px ${hexToRgbA(COLOR.ACCENT5, 0.4)};
  display: flex;
  justify-content: flex-start;
  background-color: ${p => p.isSelected ? hexToRgbA(COLOR.ACCENT3, 0.3) : ''};
  &:hover {
    background-color: ${COLOR.ACCENT3};
  }
`;
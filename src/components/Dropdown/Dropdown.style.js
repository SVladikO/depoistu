import styled from "styled-components";
import {COLOR, SHADOW} from "../../utils/theme";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 100;
`;

export const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  ${SHADOW};
  background-color: ${COLOR.ACCENT2};
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
  transition: all 0.2s;
  svg {
    display: inline-block;
    transform: rotate(${(props) => (props.isOpen ? '0' : '180deg')}); 
    transition: transform 0.2s; 
    color: ${COLOR.ACCENT5};
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  ${SHADOW};
  color: ${COLOR.ACCENT1};
  
  &:hover {
    background-color: ${COLOR.ACCENT3};
  }
`;
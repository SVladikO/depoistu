import styled from 'styled-components';
import {THEME} from "../../theme";

export const Wrapper = styled.div`
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${THEME.COLOR.ACCENT4};
  outline: 1px solid ${THEME.COLOR.ACCENT2};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${THEME.COLOR.ACCENT2};
    outline: 1px solid ${THEME.COLOR.ACCENT2};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${Label} {
    background: ${THEME.COLOR.ACCENT4};
    outline: 1px solid ${THEME.COLOR.PRIMARY};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
      outline: 1px solid ${THEME.COLOR.PRIMARY};
      background-color: ${THEME.COLOR.PRIMARY};
    }
  }
`;
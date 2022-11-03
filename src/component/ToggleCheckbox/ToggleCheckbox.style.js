import styled from 'styled-components';
import {THEME} from "../../theme";

export const Wrapper = styled.label`
  position: relative;
`;
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  
  &:checked + span {
    outline: 1px solid ${THEME.COLOR.PRIMARY};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
  &:checked + span:before {
    background-color: ${THEME.COLOR.PRIMARY};
  }
  
`;
export const RoundSlider = styled.span`
  display: flex;
  cursor: pointer;
  width: 31px;
  height: 17px;
  border-radius: 100px;
  background: ${THEME.COLOR.ACCENT4};
  position: relative;
  transition: background-color 0.2s;
  outline: 1px solid #B4C2CD;
  &:before{
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border-radius: 45px;
    transition: 0.2s;
    background-color: #B4C2CD;
  }
  &:active:before{
    width: 28px;
  }
`;

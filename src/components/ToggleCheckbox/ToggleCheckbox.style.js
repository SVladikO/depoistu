import styled from 'styled-components';
import {COLOR, FONT_16} from "../../utils/theme";

export const Wrapper = styled.label`
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &:checked + span {
    outline: 1px solid ${COLOR.PRIMARY};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
  &:checked + span:before {
    background-color: ${COLOR.PRIMARY};
  }
`;

export const RoundSlider = styled.span`
  display: flex;
  cursor: pointer;
  width: 31px;
  height: 17px;
  border-radius: 100px;
  background: ${COLOR.ACCENT4};
  position: relative;
  transition: background-color 0.2s;
  outline: 1px solid #B4C2CD;
  &:before{
    content: "";
    position: absolute;
    top: 1.5px;
    left: 1.5px;
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

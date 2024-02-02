import styled from 'styled-components';
import {COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  ${FONT.SIZE_16};
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

export const Label = styled.div`
  `;
export const InnerInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  &:checked + span {
    outline: 1px solid ${COLOR.ACCENT1};
    &:before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }
  }
  &:checked + span:before {
    background-color: ${COLOR.ACCENT1};
  }
`;

export const RoundSlider = styled.span`
  display: flex;
  cursor: pointer;
  width: 31px;
  height: 17px;
  border-radius: 100px;
  background: ${COLOR.WHITE};
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

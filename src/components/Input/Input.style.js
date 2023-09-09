import styled from 'styled-components'
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  position: relative;
  & > svg:first-child {
    position: absolute;
    display: block;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: ${COLOR.PRIMARY};
    fill: ${COLOR.PRIMARY};
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;
export const SwitchIconWrapper = styled.div`
  position: absolute;
  display: block;
  right: 15px;
  top: 20%;
`;

export const CenterWrapper = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClearWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
  display: block;
  & > svg:first-child {
    color: ${COLOR.ACCENT5};
  }
`;

export const CityInputWrapper = styled.div`
  padding: 1px;
  border-radius: 4px;
  border: solid 2px ${COLOR.ACCENT5};
  position: relative;
  
  &:hover {
    cursor: pointer;
  }
  
  & > svg {
    position: absolute;
    top: 15px;
    left: 11px;
    z-index: 1;
    width: 14px;
    fill: ${COLOR.ACCENT1};
  }
`;

export const CityInputValue = styled.p`
  ${p => st(p)};
  font-size: 20px;
  font-weight: 500;
`;
const st = p => `
  background: ${COLOR.ACCENT2};
  color: ${COLOR.ACCENT1};
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 14px  ${p.withRightIcon ? '40px' : '10px'} 17px ${p.withLeftIcon ? '35px' : '10px'};
`;

export const TextareaStyle = styled.textarea`
  ${p => st(p)};
  resize: vertical;
  height: 100px;
  min-height: 50px;
  padding: 14px 40px 17px 10px;
`;
export const InputText = styled.input`

  ${p => st(p)}
  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  ::placeholder {
    color: ${COLOR.ACCENT1};
  }
`;

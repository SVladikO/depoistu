import styled, {css} from 'styled-components'
import {COLOR, BORDER_RADIUS, FONT} from "utils/theme";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 25px;
  border: 1px solid ${p => p.isTouched || p.errorMessage ? COLOR.PRIMARY :COLOR.ACCENT1};
  border-radius: 5px;
  
  & > svg {
    position: absolute;
    display: block;
    left: 10px;
    top: 25px;
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
  
  & > svg {
    fill: ${COLOR.ACCENT1};
    width: 24px;
    height: 24px;
  }
`;

export const ClearWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 18px;
  height: 18px;
  display: block;
  & > svg:first-child {
    color: ${COLOR.ACCENT1};
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
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_500};
  
  ${p => st(p)};
  font-weight: 500;
`;
const st = p => `
  ${FONT.SIZE_16};
  background: ${COLOR.ACCENT4};
  color: ${COLOR.ACCENT1};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: ${BORDER_RADIUS.INPUT};
  padding: 14px  ${p.withRightIcon ? '46px' : '10px'} 17px ${p.withLeftIcon ? '35px' : '16px'};
`;

export const TextareaStyle = styled.textarea`
  ${p => st(p)};
  resize: vertical;
  height: 100px;
  min-height: 50px;
  padding: 14px 40px 17px 16px;
`;

export const Label = styled.label`
  position: absolute;
  left: 11px;
  top: -13px;
  z-index: 2;
  padding: 3px 5px;
  background-color: ${COLOR.ACCENT4};
  
  ${p => p.isRequired && css`
    &:after {
      content: ' *';
      color: ${COLOR.PRIMARY};
    }
  `};
`

export const InputText = styled.input`
  ${p => st(p)};

  &:active,
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${COLOR.ACCENT1};
  }
`;
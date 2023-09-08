import styled,{css} from 'styled-components'
import {BORDER_RADIUS, COLOR, FONT_16} from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 25px;
  border: 1px solid ${p => p.isTouched || p.errorMessage ? COLOR.PRIMARY :COLOR.ACCENT1};
  border-radius: ${BORDER_RADIUS.INPUT};
  
  & > svg {
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

export const Placeholder = styled.span`
  color: ${COLOR.ACCENT5};  
  font-weight: bold;
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

const st = p => `
  ${FONT_16};
  background: ${COLOR.ACCENT4};
  color: ${COLOR.ACCENT1};
    border-radius: ${BORDER_RADIUS.INPUT};
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 14px  ${p.withRightIcon ? '40px' : '10px'} 17px ${p.withLeftIcon ? '35px' : '10px'};
`;

export const PStyle = styled.p`
  ${p => st(p)};
  font-size: 20px;
  font-weight: 500;
`

export const TextareaStyle = styled.textarea`
  ${p => st(p)};
  resize: vertical;
  height: 100px;
  min-height: 50px;
  padding: 14px 40px 17px 10px;
`;

export const Label = styled.label`
  ${FONT_16};
  position: absolute;
  left: 16px;
  top: -13px;
  z-index: 2;
  padding: 3px;
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
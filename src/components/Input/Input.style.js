import styled from 'styled-components'
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  
  & > svg:first-child {
    position: absolute;
    display: block;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${COLOR.ACCENT1};
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

export const CloseIconWrapper = styled.div`
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

export const PInputWrapper = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 12px;
    left: 10px;
    z-index: 1;
  }
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
  padding: ${p.withIcon ? '14px 40px 17px 35px' : '14px 40px 17px 10px'};
`;

export const PStyle = styled.p`
  ${p => st(p)}
`

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

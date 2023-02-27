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
    fill: ${COLOR.PRIMARY};
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


export const InputText = styled.input`
  background: ${COLOR.ACCENT2};
  color: ${COLOR.ACCENT1};
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  padding: ${p => {
    if (p.withIcon) return '14px 20px 17px 35px'
    return '14px 10px 17px 10px'
  }};


  ::placeholder {
    color: ${COLOR.ACCENT1};
  }
`;

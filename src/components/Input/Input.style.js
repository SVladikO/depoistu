import styled from 'styled-components'
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  position: relative;
  
  & > svg:first-child {
    position: absolute;
    display: block;
    left: 15px;
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
  width: 30px;
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

export const InputText = styled.input`
  background: ${COLOR.ACCENT2};
  color: ${COLOR.ACCENT1};
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  padding: ${p => {
    if (p.withIcon) return '14px 20px 17px 50px'
    if (p.withSwitcher) return '14px 46px 17px 20px'
    return '14px 20px 17px 20px'
  }};

  border-radius: ${p => p.withSwitcher ? '40px' : 0};

  ::placeholder {
    color: ${COLOR.ACCENT1};
  }
`;

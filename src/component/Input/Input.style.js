import styled from 'styled-components'
import {THEME} from "../../theme";

export const Wrapper = styled.div`
    position: relative;
    & > svg {
        position: absolute;
        display: block;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const InputText = styled.input`
  background: ${THEME.COLOR.ACCENT2};
  color: ${THEME.COLOR.ACCENT1};
  width: 100%;
  height: 50px;
  border: none;
  font-size: 16px;
  padding: 14px 20px 17px ${p => p.withIcon ? '50px' : '20px'};
  
  ::placeholder {
    color: ${THEME.COLOR.ACCENT1};
  }
`;

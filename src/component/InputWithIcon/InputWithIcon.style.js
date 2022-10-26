import styled from 'styled-components'
import {THEME} from "../../theme";

export const Input = styled.input`
  background: ${THEME.COLOR.ACCENT2};
  width: 100%;
  height: 50px;
  border: none;
  padding: 0 0 0 50px;
  line-height: 19px;
  outline: none;
  border-radius: 3px;
  ::placeholder {
    font-size: 16px;
    color: #3F3D56;
  }
`;

export const InputIconWrapper = styled.div`
    position: relative;
    & > svg {
        position: absolute;
        display: block;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
    }
`;
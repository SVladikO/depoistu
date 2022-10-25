import styled from 'styled-components'
import {THEME} from "../../theme";

export const Input = styled.input`
  background: ${THEME.COLOR.ACCENT2};
  width: 100%;
  height: 50px;
  border: none;
  padding: 0 0 0 20px;
  line-height: 19px;
  outline: none;
  border-radius: 3px;
  ::placeholder {
    font-size: 16px;
    color: #3F3D56;
  }
`;

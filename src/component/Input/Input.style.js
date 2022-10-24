import styled from 'styled-components'
import {THEME} from "../../theme";

export const Input = styled.input`
  padding: 14px 0 17px 20px;
  background: ${THEME.COLOR.ACCENT2};
  border: none;
  border-radius: 3px;
  ::placeholder {
    font-size: 16px;
  }
`;
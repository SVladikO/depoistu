import styled from 'styled-components'
import {THEME} from "../../theme";
import MailIcon from "../../icons/MailIcon";

export const Input = styled.input`
  background: ${THEME.COLOR.ACCENT2};
  width: 100%;
  height: 50px;
  border: none;
  padding: 0 0 0 40px;
  line-height: 19px;
  outline: none;
  border-radius: 3px;
  ::placeholder {
    font-size: 16px;
    color: #3F3D56;
  }
`;
export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    display: block;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
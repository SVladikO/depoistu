import styled from "styled-components";
import {button} from "./button";
import {COLOR, rotationAnimation} from "../../utils/theme";

export const LoadingButton = styled(button)`
  background: ${COLOR.ACCENT5};

  & > svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    animation: ${rotationAnimation} 1s infinite linear;
  }
`;
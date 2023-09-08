import styled from "styled-components";
import {button} from "./button";
import {COLOR, hexToRgbA} from "utils/theme";

export const SecondaryButton = styled(button)`
  color: ${COLOR.ACCENT3};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};

  & > svg {
    fill: ${COLOR.ACCENT3};
  }
`;
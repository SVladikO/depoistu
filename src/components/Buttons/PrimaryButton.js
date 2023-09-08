import styled from "styled-components";
import {button} from "./button";
import {COLOR, GRADIENT} from "utils/theme";

export const PrimaryButton = styled(button)`
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});

  & > svg {
    fill: ${COLOR.ACCENT4};
  }
`;
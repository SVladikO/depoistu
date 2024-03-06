import styled from "styled-components";
import {button} from "./button";
import {COLOR, FONT} from "utils/theme";

export const DisabledButton = styled(button)`
  ${FONT.SIZE_20};
  height: 40px;
  color: ${COLOR.ACCENT1};
  background-color: ${COLOR.WHITE};
  border-radius: 0;
  border: 1px solid ${COLOR.ACCENT9};
  flex: 1;
  svg {
    color: ${COLOR.ACCENT1};
    min-height: 17px;
    min-width: 17px;
    display: block;
    margin: ${p => p.isOnlyIcon ? 0 : '0 12px 0 0'};
  }
`;
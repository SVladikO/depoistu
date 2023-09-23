import styled from "styled-components";
import {button} from "./button";
import {COLOR} from "utils/theme";

export const DisabledButton = styled(button)`
  //min-width: 33.3%;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  color: ${COLOR.ACCENT1};
  background-color: ${COLOR.ACCENT4};
  border-radius: 0;
  border: 1px solid ${COLOR.ACCENT8};
  flex: 1;
  svg {
    color: ${COLOR.ACCENT5};
    height: 17px;
    width: 17px;
    display: block;
  }
`;
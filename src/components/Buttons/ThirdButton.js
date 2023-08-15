import styled from "styled-components";
import {button} from "./button";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const ThirdButton = styled(button)`
  background-color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.FOURTH};
  color: ${COLOR.ACCENT5};
  border: 1px solid ${COLOR.ACCENT5};
  padding: 2px 10px 4px 10px;
  display: block;
  height: auto;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  & > svg {
    width: 15px;
    height: 15px;
    color: ${COLOR.ACCENT3};
    fill: ${COLOR.ACCENT3};
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;
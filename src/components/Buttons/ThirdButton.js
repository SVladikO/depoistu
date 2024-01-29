import styled from "styled-components";
import {button} from "./button";
import {COLOR} from "utils/theme";

export const ThirdButton = styled(button)`
  background-color: ${COLOR.WHITE};
  color: ${COLOR.ACCENT5};
  height: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 0;
  color: ${COLOR.ACCENT1};
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  
  &:active {
    border: none;
    padding: 0;
  }

  & > svg {
    width: 15px;
    height: 15px;
    color: ${COLOR.ACCENT1};
    fill: ${COLOR.ACCENT1};
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;
import styled from "styled-components";
import {button} from "./button";
import {COLOR} from "../../utils/theme";

export const ThirdButton = styled(button)`
  border: none;
  background-color: ${COLOR.ACCENT4};
  color: ${COLOR.ACCENT5};
  height: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 0;
  color: ${props => props.isShowDetails ? COLOR.INFO1 : COLOR.ACCENT1};
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
    color: ${COLOR.ACCENT3};
    fill: ${COLOR.ACCENT3};
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;
import styled from "styled-components";
import {button} from "./button";
import {COLOR} from "../../utils/theme";

export const ThirdButton = styled(button)`
  background-color: ${COLOR.ACCENT4};
  color: ${props => props.isShowDetails ? COLOR.INFO1 : COLOR.ACCENT1};
  padding: 0;
  height: 30px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  & > svg {
    width: 15px;
    height: 15px;
    color: ${COLOR.ACCENT3};
    fill: ${COLOR.ACCENT3};
    display: inline-block;
  }
`;
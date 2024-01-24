import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    background: ${COLOR.ACCENT4};
    position: relative;
    height: 54px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
`;

export const Title = styled.div`
  width: 100%;
  text-align: center;
  ${FONT.SIZE_18};
  ${FONT.WEIGHT_700};
  justify-self: center;
  padding: 16px;
  color: ${COLOR.ACCENT1};
  display: block;
  z-index: 3;
`

export const BackButton = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 15px 20px 15px;
  z-index: 4;
  & > svg {
    height: 16px;
    width: 16px;
  
    fill: ${COLOR.ACCENT1};
  }
`;
import styled from "styled-components";
import {THEME} from "../../theme";


export const Wrapper = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${THEME.COLOR.ACCENT4};
  position: relative;
  & > a > svg {
    position: absolute;
    display: block;
    fill: ${THEME.COLOR.ACCENT1};
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  justify-self: center;
  padding: 16px;
  color: ${THEME.COLOR.ACCENT1};
`

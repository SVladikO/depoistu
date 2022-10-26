import styled from "styled-components";
import {THEME} from "../../theme";

export const Wrapper = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  position: relative;
  & > svg {
    position: absolute;
    display: block;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`
export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  justify-self: center;
  color: ${THEME.COLOR.ACCENT1};
`

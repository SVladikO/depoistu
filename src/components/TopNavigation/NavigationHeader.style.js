import styled from "styled-components";
import {COLOR} from "../../theme";


export const Wrapper = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${COLOR.ACCENT4};
  position: relative;
  border-radius: 0 0 5px 5px;
  & > a > svg {
    position: absolute;
    display: block;
    fill: ${COLOR.ACCENT1};
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
  color: ${COLOR.ACCENT1};
`

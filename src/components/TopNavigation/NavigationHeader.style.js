import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";


export const Wrapper = styled.div`
  background: ${COLOR.ACCENT4};
  //height: 100%;
  width: 100%;
  border-radius: 0 0 ${BORDER_RADIUS.FOURTH} ${BORDER_RADIUS.FOURTH};
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  justify-self: center;
  padding: 16px;
  color: ${COLOR.ACCENT1};
  display: block;
`
export const NestedContent = styled.div`
  width: 100%;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  
  & > a > svg {
    position: absolute;
    display: block;
    fill: ${COLOR.ACCENT1};
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
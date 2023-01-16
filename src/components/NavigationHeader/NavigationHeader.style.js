import styled from "styled-components";
import {BORDER_RADIUS, COLOR, DEVICE_WIDTH} from "../../utils/theme";


export const Wrapper = styled.div`
  background: ${COLOR.ACCENT4};
  min-width: ${DEVICE_WIDTH.MIN};
  width: 100%;
  max-width: ${DEVICE_WIDTH.MAX};
  border-radius: 0 0 ${BORDER_RADIUS.FOURTH} ${BORDER_RADIUS.FOURTH};
  margin-bottom: 30px;
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

  -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.11);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.11);
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.11);
  
  & > a {
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  
  & > a:first-child > svg {
    fill: ${COLOR.ACCENT1};
  }
  
  & > a:first-child {
    left: 15px;
  }
  
  & > a:last-child {
    right: 15px;
  }
`;
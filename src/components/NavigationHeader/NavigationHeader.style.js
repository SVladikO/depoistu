import styled from "styled-components";
import {BORDER_RADIUS, COLOR, DEVICE_WIDTH} from "../../utils/theme";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  z-index: 2;
  top: 0;
  transition: top 0.3s;
  background: ${COLOR.ACCENT4};
  min-width: ${DEVICE_WIDTH.MIN};
  max-width: ${DEVICE_WIDTH.MAX};
  border-radius: 0 0 ${BORDER_RADIUS.FOURTH} ${BORDER_RADIUS.FOURTH};
  margin-bottom: 30px;

  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
`
export const Title = styled.div`
  width: 80%;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  justify-self: center;
  padding: 16px;
  color: ${COLOR.ACCENT1};
  display: block;
`
export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  padding: 25px 15px 20px 15px;

  & > svg {
    height: 16px;
    width: 16px;
  
    fill: ${COLOR.ACCENT1};
  }
`;
import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";


export const Wrapper = styled.div`
  display: flex;
  background: ${COLOR.ACCENT4};
  margin-bottom: 30px;
  border-radius: 0 0 ${BORDER_RADIUS.FOURTH} ${BORDER_RADIUS.FOURTH};
  position: relative;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
`
export const Title = styled.div`
  width: 100%;
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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 15px 20px 15px;

  & > svg {
    height: 16px;
    width: 16px;
  
    fill: ${COLOR.ACCENT1};
  }
`;
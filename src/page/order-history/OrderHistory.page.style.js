import styled from 'styled-components';
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  margin-top: 50px;
`;
export const Content = styled.div`
  & > div {
    margin-top: 15px;
  }
  & > div:first-child{
    margin-top: 0;
  }
`;
export const Date = styled.div`
  justify-self: flex-start;
  color: ${COLOR.ACCENT1};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;
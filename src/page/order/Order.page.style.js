import styled from "styled-components";
import {COLOR} from 'utils/theme';

export const Wrapper = styled.div`
  padding: 0 0 18px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const Content = styled.div`
  margin-bottom: 26px;
  & > div {
    margin-top: 15px;
  }
  & > div:first-child{
    margin-top: 0;
  }
`;

export const AmountInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 17px 19px;
  
  div:last-child {
    color: ${COLOR.PRIMARY};
  }
`;

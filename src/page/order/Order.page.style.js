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
export const FixedContent = styled.div`
  display: block;
  position: sticky;
  bottom: 0;
  width: inherit;
  padding: 10px 0 90px 0;
  background-color: ${COLOR.ACCENT2};

`;

export const AmountInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 19px;
`;
export const Button = styled(FetchButton)`
  font-weight: 700;
`;
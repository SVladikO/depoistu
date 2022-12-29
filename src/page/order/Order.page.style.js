import styled from "styled-components";
import {COLOR} from '../../utils/theme';

export const Wrapper = styled.div`
  padding: 13px 0 18px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > div {
    margin-top: 10px;
  }
  & > div:nth-child(6) {
    margin-top: 26px;
  }
`;

export const AmountInfo = styled.div`
  font-weight: 700;
  padding-right: 7px;
  padding-left: 30%;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 19px;
`;

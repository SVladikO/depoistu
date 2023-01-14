import styled from "styled-components";
import {COLOR} from '../../utils/theme';
import {PrimaryWideButton} from '../../components';
export const Wrapper = styled.div`
  padding: 0 0 18px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;
export const Content = styled.div`
  margin-bottom: 26px;
  & > div {
    margin-top: 10px;
  }
  & > div:first-child{
    margin-top: 0;
  }
`;
export const FixedContent = styled.div`
  z-index: 2;
  display: block;
  position: sticky;
  bottom: 0;
  width: inherit;
  padding: 10px 0 90px 0;
  background-color: ${COLOR.ACCENT2};

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
export const Button = styled(PrimaryWideButton)`
  font-weight: 700;
`;
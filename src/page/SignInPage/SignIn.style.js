import styled from "styled-components";
import {COLOR} from '../../theme';

export const Wrapper = styled.div`
  background-color: ${COLOR.ACCENT2};
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  position: relative;
  justify-content: center;
  z-index: -1;
  padding: 28px 25px 25px 25px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 276px;
`;
export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 11px);
  justify-content: flex-start;
`;
export const Label = styled.div`
  color: ${props => props.primary ? COLOR.PRIMARY : COLOR.ACCENT1};
  margin: 11px auto 15px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-end;
  & > ${Label}{
    margin-right: 0;
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  & > div{
    margin:  21px 0 0 3px;
  }
`;
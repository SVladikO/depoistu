import styled from "styled-components";
import {COLOR} from '../../theme';

export const Wrapper = styled.div`
  background-color: ${COLOR.ACCENT2};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: start;
  //z-index: -1;
  padding: 0 25px 25px 25px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 228px;
  height: 228px;
  border-radius: 50%;
  background: ${COLOR.ACCENT4};
  border: none;
  margin: 28px auto 28px auto; 
  padding: 45px;
  & > svg {
    width: 140px;
    height: 140px;
    fill: ${COLOR.PRIMARY};
  }
`;

export const LogoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.PRIMARY};
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    margin: 21px 0 0 3px;
  }
`;
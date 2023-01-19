import styled from "styled-components";
import {COLOR} from '../../utils/theme';

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
  margin: 0 auto 31px; 
  padding: 45px;
  & > svg {
    width: 140px;
    height: 140px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.PRIMARY};
  font-weight: 900;
  font-size: 28px;
  line-height: 34px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;


export const Label = styled.div`
  color: ${props => props.primary ? COLOR.ACCENT3 : COLOR.ACCENT1};
  margin: 11px auto 15px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const NavLabel = styled.div`
  color: ${props => props.primary ? COLOR.ACCENT3 : COLOR.ACCENT1};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: start;
  padding-bottom: 15px;
`;

export const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 5px);
`;

export const LeftSideContent = styled(SideContent)`
  justify-content: start;
`;

export const RightSideContent = styled(SideContent)`
  justify-content: flex-end;
`;


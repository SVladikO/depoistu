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

export const Label = styled.div`
  color: ${props => props.primary ? COLOR.ACCENT3 : COLOR.ACCENT1};
  margin: 11px auto 15px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

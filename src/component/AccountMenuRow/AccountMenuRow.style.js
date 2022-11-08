import styled from "styled-components";
import {THEME} from "../../theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftContent = styled.div`
  display: flex;
  & > svg {
    width: 16.82px;
    height: 19.22px;
    margin-right: 16px;
    fill: ${THEME.COLOR.ACCENT1};
  }
`;
export const RightContent = styled.div``;

export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${THEME.COLOR.ACCENT1};
`
export const RightAnchor = styled.img`
  width: 7.2px;
  height: 12.6px;
  display: block;
  fill: #1C2340;
`;
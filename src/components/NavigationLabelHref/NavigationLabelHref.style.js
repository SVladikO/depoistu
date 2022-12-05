import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  & > div{
    margin: 21px 0 25px 3px;
  }
`;
export const Label = styled.div`
  & > a {
    color: ${props => props.primary ? COLOR.ACCENT3 : COLOR.ACCENT1};
    margin: 11px auto 15px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    @media (max-width: 360px) and (min-width: 320px) {
      font-size: 14px;
    }
  }
`;
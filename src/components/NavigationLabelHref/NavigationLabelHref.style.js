import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 21px 0 25px 3px;
`;

export const Label = styled.span`
  color: ${COLOR.ACCENT1};
  margin-left: 3px;
  & > a {
    margin: 11px auto 15px 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Title = styled(Label)`
  color: ${COLOR.ACCENT3};
`;
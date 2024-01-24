import styled from "styled-components";
import {COLOR} from "utils/theme";

export const OpenStatus = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  display: inline-flex;
  margin: 0 7px 0 0;

  svg {
    display: inline-block;
    width: 15px;
    height: 18px;
    color: ${COLOR.ACCENT1};
    margin: 4px 8px 0 -1px;
  }
`;


export const Closes = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  position: relative;
  display: inline-block;

  & > span {
    display: inline-block;
  }
`;

export const Schedule = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;

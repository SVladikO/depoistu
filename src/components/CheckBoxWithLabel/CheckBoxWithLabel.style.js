import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  label{
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    color: ${COLOR.ACCENT1};
    text-align: center;
    display: flex;
  }
`;
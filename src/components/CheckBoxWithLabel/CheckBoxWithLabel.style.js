import styled from "styled-components";
import {COLOR} from "../../theme";

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
    padding-right: 12px;
    &:hover{
      &::before{
        background-color: ${COLOR.ACCENT2};
      }
    }
  }
  label::before{
    content: "";
    border: 1px solid #D8DEFE;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  input{
    cursor: pointer;
    opacity: 0;
    position: absolute;
  }
  input:checked{
    &+label::before{
      content: "\\002714";
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 12px;
    }
  }
`;
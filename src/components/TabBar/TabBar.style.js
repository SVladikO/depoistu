import styled from "styled-components";
import {COLOR} from "../../theme";


export const Wrapper =  styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 28px 22px 28px;
`;
export const Tab = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  position: relative;
  color: ${p => p.active ? COLOR.PRIMARY: COLOR.ACCENT1};
  &::after{
    content: "|";
    display: block;
    color: ${COLOR.ACCENT1};
    position: absolute;
    top: 0;
    left: calc(100% + 10px);
  }
  &:last-child::after{
    display: none;
  }
`;
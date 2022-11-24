import styled from "styled-components";
import {COLOR, MEDIA} from "../../theme";

export const Wrapper =  styled.div`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 7px 28px 22px 28px;
  margin: 0;
`;
export const Tab = styled.div`
  width: 33%;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  color: ${p => p.active ? COLOR.PRIMARY: COLOR.ACCENT1};
  &:not(:last-child) {
    margin-right: 6%;
    padding-right: 7%;
    border-right: 1px solid;
  }
`;
import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  background: white;
  height: 150vh;
  margin: auto;
`;
export const Table = styled.table`
  margin: auto;
`;
export const TD = styled.td`
  padding: 4px;
  word-wrap: break-word;
  max-width: 360px;
`;
export const LinksWrapper = styled.div`
  width: 275px;
  margin: auto;
`;
export const StyledLink = styled.a`
  padding: 10px;
  margin: 2px;
  border: solid 1px blue;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SpinnerWrapper = styled.span`
  & > svg {
    margin: 0 10px;
    height: 16px;
    width: 16px;
  }
`;
export const GroupTitle = styled.div`
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  color: ${COLOR.ACCENT1};
  padding: 40px 0 20px;
  margin: auto;
`;
export const GroupTitle2 = styled.div`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: ${COLOR.ACCENT1};
  padding: 40px 0 20px;
  margin: auto;
`;
export const LedError = styled.span`
  margin: 0 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ff0026;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #ff0026 0 2px 12px;
`;
export const LedSuccess = styled.span`
  margin: 0 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ABFF00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;
`;
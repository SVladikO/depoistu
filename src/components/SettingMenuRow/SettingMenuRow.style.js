import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 10px 13px 16px;
  margin: 0 0 1px 0;
  background: ${COLOR.ACCENT4};
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  &:hover {
    cursor: pointer;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  & > svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    fill: ${COLOR.ACCENT1};
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: ${COLOR.ACCENT1};
`;

export const Label = styled.div`
  color: #B4C2CD;
  font-size: 18px;
`;

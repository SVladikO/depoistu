import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 325px;
  background-color: ${COLOR.ACCENT4};
  padding: 30px;
  & > span {
    margin: 10px 0 0 0;
  }
`;

export const Text = styled.div`
  margin: 15px 0 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;

import styled from "styled-components";
import {COLOR} from '../../utils/theme';


export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin: 15px 0 0;
  }
`;
export const Wrapper = styled.div`
  background-color: ${COLOR.ACCENT2};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: start;
`;

export const Content = styled.div`
  width: 325px;
  margin: 18px auto 0;
`;


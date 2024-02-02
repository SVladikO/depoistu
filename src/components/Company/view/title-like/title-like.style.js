import styled from "styled-components";
import {COLOR} from "../../../../utils/theme";


export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > svg {
      height: 40px;
      width: 40px;
      padding: 5px;
      top: -5px;
      position: relative;
  }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 10px 0;
`;

import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  color: ${COLOR.ACCENT1};
  text-align: center;
  
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 17px;
  color: ${COLOR.ACCENT1};
  text-align: center;
`;


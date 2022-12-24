import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${COLOR.ACCENT1};
  
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${COLOR.ACCENT1};
`;


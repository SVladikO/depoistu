import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> p.small ? 16 : 12}px;
  line-height: ${p => p.big ? 19 : 14}px;
  color: ${COLOR.PRIMARY};
`
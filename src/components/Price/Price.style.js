import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> p.small ? 12 : 20}px;
  line-height: ${p=> p.smallLineHeight ? 14 : 24}px;
  color: ${COLOR.PRIMARY};
`
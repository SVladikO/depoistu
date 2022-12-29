import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${p=> p.small ? 12 : 16}px;
  line-height: ${p=> p.small ? 14 : 19}px;
  color: ${COLOR.PRIMARY};
`
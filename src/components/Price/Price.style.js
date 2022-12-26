import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (props.small ? "16px" : "12px")};
  line-height: ${(props) => (props.big ? "19px" : "14px")};
  color: ${COLOR.PRIMARY};
`
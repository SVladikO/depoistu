import styled from "styled-components";
import {COLOR} from "utils/theme";

export const CheckboxStyle = styled.input`
  -webkit-appearance: textfield;
  cursor: pointer;
  content: "";
  border: 1px solid #D8DEFE;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: block;

  &:checked {
    background-color: gray;
  }
  
  &[type="checkbox"] {
    accent-color: ${COLOR.PRIMARY};
  }
`;
import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  display: flex;  
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxStyle = styled.input`
  margin: ${p => p.isLabelExist ? '0 10px 0 0' : 0};
  -webkit-appearance: textfield;
  cursor: pointer;
  content: "";
  border: 1px solid #D8DEFE;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: block;

  &:checked {
    background-color: gray;
  }
  
  &[type="checkbox"] {
    accent-color: ${COLOR.PRIMARY};
  }
`;
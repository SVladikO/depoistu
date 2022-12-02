import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";


export const Discount = styled.div`
  width: 40px;
  background-color: ${COLOR.PRIMARY};
  font-weight: 700;
  font-size: 12px;
  padding: 0 3px 0 0;
  line-height: 16px;
  border-radius: ${BORDER_RADIUS.THIRD};
  color: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
`

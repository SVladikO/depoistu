import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const WarningMessageWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT6};
  background: ${COLOR.ACCENT7};
  padding: 2px 0 4px 13px;
  display: flex;
  justify-content: left;
  border-radius: 0 0 ${BORDER_RADIUS.INPUT} ${BORDER_RADIUS.INPUT};
`;
import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../theme";

export const ContentContainer = styled.div`
  background: ${COLOR.ACCENT4};
  width: 100%;
  min-height: 30px;
  text-align: center;
  padding: 20px 25px 35px 25px;
  border-radius: ${BORDER_RADIUS.SECOND};
`
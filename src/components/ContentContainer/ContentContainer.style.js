import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const ContentContainer = styled.div`
  width: 100%;
  background: ${COLOR.ACCENT4};
  text-align: center;
  padding: 10px;
  border-radius: ${BORDER_RADIUS.SECOND};
  margin-bottom: 20px;
  
  & > a {
    color: ${COLOR.ACCENT3};
  }
  & > * {
    margin-bottom: 15px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`
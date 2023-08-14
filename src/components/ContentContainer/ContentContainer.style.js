import styled from 'styled-components';
import {BORDER_RADIUS, COLOR, SHADOW} from "../../utils/theme";

export const ContentContainer = styled.div.attrs({
    className: 'ContentContainer',
})`
  ${SHADOW};
  width: 100%;
  background: ${COLOR.ACCENT4};
  text-align: center;
  padding: 10px;
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
  margin: 0 0 15px;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  
  & > a {
    color: ${COLOR.ACCENT3};
  }
  & > * {
    margin-bottom: 10px;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`
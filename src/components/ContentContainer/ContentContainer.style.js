import styled, {css} from 'styled-components';
import {BORDER_RADIUS, COLOR, SHADOW} from "utils/theme";

export const ContentContainerDefault = css`
  ${SHADOW};
  width: 100%;
  background: ${COLOR.ACCENT4};
  padding: 10px;
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
  margin: 0 0 15px;

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
export const ContentContainer = styled.div.attrs({
    className: 'ContentContainer',
})`
  ${ContentContainerDefault}
`;
import styled, {css} from 'styled-components';
import {COLOR, SHADOW} from "utils/theme";

export const ContentContainerDefault = css`
  width: 100%;
  background: ${p => p.noBg ? 'none' : COLOR.ACCENT4};
  padding: ${p => p.noPadding ? 0 : '10px'};
  ${p => p.noShadow ? '' : SHADOW};
  

  & > a {
    color: ${COLOR.ACCENT3};
  }

  & > button, a {
    margin-bottom: 22px;
  }

  & > button:last-child {
    margin-bottom: 0;
  }
`
export const ContentContainer = styled.div.attrs({
    className: 'ContentContainer',
})`
  ${ContentContainerDefault}
`;
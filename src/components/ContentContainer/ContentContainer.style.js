import styled, {css} from 'styled-components';
import {COLOR, SHADOW_LIGHT} from "utils/theme";

export const ContentContainerDefault = css`
  width: 100%;
  padding: ${p => p.noPadding ? 0 : p.padding || '15px'};
  background: ${p => p.bg || 'none'};
  ${p => p.noShadow ? '' : SHADOW_LIGHT};


  & > a {
    color: ${COLOR.SECONDARY};
  }

  & > * {
    margin-bottom: 22px;
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
import styled from 'styled-components';
import {COLOR, SHADOW, FONT, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  ${SHADOW};
  color: ${COLOR.ACCENT1};
  background: ${COLOR.ACCENT4};
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
`;

export const Title = styled.div`
  ${FONT.SIZE_22};
  ${FONT.WEIGHT_500};
  line-height: 26.4px;
  margin: 0 0 10px 0;
  text-transform: uppercase;
`;
export const Description = styled.div`
  ${FONT.SIZE_20};
  margin: 0 0 20px 0;
  &:last-child {
    margin: 0;
  }
`;
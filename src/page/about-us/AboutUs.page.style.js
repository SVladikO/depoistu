import styled from 'styled-components';
import {COLOR, SHADOW, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  ${SHADOW};
  color: ${COLOR.ACCENT1};
  background: ${COLOR.ACCENT4};
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 26.4px;
  margin: 0 0 10px 0;
  text-transform: uppercase;
`;
export const Description = styled.div`
  font-size: 20px;
  margin: 0 0 20px 0;
  &:last-child {
    margin: 0;
  }
`;
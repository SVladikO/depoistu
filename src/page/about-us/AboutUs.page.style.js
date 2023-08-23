import styled from 'styled-components';
import {COLOR, SHADOW, BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  ${SHADOW};
  color: ${COLOR.ACCENT1};
  background: ${COLOR.ACCENT4};
  border-radius: ${p => p.borderRadius ? p.borderRadius : BORDER_RADIUS.SECOND};
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 22px;
  line-height: 26.4px;
  margin: 0 0 10px 0;
`;
export const Description = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 26.4px;
  &:last-child {
    margin: 5px 0 0 0;
  }
`;
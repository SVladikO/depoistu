import styled from "styled-components";
import {BORDER_RADIUS, SHADOW} from '../../utils/theme';

export const  Wrapper = styled.div`
    ${SHADOW};
    border-radius: ${BORDER_RADIUS.SECOND};
    overflow: hidden;
`;

export const EditBar = styled.div`
  width: 245px;
  margin: 0 auto;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 18px;
`;
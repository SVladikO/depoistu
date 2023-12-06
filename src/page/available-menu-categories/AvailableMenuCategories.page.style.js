import styled from 'styled-components';
import {COLOR, FONT} from "../../utils/theme";

export const Table = styled.table`
  margin: 0 auto;
  
`;

export const GroupTitle = styled.div`
  text-align: center;
  color: ${COLOR.ACCENT1};
  ${FONT.SIZE_32};
  ${FONT.WEIGHT_500};
  margin: 20px 0 0;
`

export const TD = styled.td`
  color: ${COLOR.ACCENT1};
  ${FONT.SIZE_20};
  ${FONT.WEIGHT_400};
  padding: 4px;
    
`

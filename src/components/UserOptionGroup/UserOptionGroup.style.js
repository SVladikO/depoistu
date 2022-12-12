import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";


export const Wrapper = styled.div`
  background: ${COLOR.ACCENT4};  
  border-radius: 0 0 ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND};
`;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 0 0 30px;
  font-size: 18px;
  font-weight: 600;
  color: ${COLOR.PRIMARY};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};;
`

export const RowsWrapper = styled.div`
  padding: 5px 0 10px;
`
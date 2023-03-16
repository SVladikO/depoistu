import styled from "styled-components";
import {BORDER_RADIUS, COLOR,GRADIENT} from "../../utils/theme";


export const RowsWrapper = styled.div`
  background: ${COLOR.ACCENT4};
  padding: 5px 10px 10px;
`
export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 0 0 30px;
  font-size: 18px;
  color: ${COLOR.ACCENT4};
  border-radius: ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND} 0 0;
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
`

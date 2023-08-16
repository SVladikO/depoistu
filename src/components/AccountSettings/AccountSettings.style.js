import styled from "styled-components";
import {BORDER_RADIUS, COLOR,GRADIENT} from "../../utils/theme";

const border1 = `${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND} 0 0`;
const border2 = `0 0 0 0`;


export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 0 0 30px;
  font-size: 20px;
  color: ${COLOR.ACCENT4};
  ${p => `border-radius: ${p.noTopBorder ? border2 : border1};`}
  background-image: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
`;

export const RowsWrapper = styled.div`
  background: ${COLOR.ACCENT4};
`
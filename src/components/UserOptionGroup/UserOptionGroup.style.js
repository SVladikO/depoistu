import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";


export const Wrapper = styled.div`
  background: ${COLOR.ACCENT4};  
`;

export const GroupTitle = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 0 0 30px;
  font-size: 18px;
  color: ${COLOR.PRIMARY};
  background: ${hexToRgbA(COLOR.ACCENT3, 0.1)};;
`

export const Content = styled.div`
  background: ${COLOR.ACCENT4};
  margin-bottom: 30px;
`
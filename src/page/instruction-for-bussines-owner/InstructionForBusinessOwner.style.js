import styled from 'styled-components';
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  color: ${COLOR.ACCENT1};
  
  & > iframe {
    margin: auto;
    display: block;
  }
`;

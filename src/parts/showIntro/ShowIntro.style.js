import styled from "styled-components";
import {COLOR} from "../../utils/theme";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 34px 0;
  & > div {
    color: ${COLOR.ACCENT3};
    font-size: 20px;
  }
  svg {
    display: block;
    margin: 0 0 10px 0;
  }
`;

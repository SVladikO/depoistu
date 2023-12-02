import styled from "styled-components";
import {COLOR} from "utils/theme";

export const Wrapper = styled.div`
  margin: 0 0 40px 0;
  & > * {
    margin-bottom: 22px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 34px 0;

  svg {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 0 10px 0;
  }
`;

export const Address = styled.div`
  color: ${COLOR.ACCENT3};
  font-size: 20px;
`;
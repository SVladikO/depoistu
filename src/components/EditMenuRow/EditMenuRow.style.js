import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {SecondaryButton} from "../Button/Button.style";

export const Wrapper = styled.div`
  margin: 10px 8px 10px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;
export const EditSection = styled.div`
  > * {
    &:first-child {
      margin: 0 8px 0 0;
    }
  }
`;


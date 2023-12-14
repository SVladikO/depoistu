import styled from "styled-components";
import {COLOR} from "utils/theme";

export const BasketButton = styled.div`
  width: 31px;
  height: 34px;
  background: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 10px;
  top: 10px
`;
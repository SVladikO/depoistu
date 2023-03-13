import styled from 'styled-components';
import {BORDER_RADIUS, COLOR} from "../../utils/theme";

export const Wrapper = styled.div`
  min-width: 355px;
  max-width: 355px;
  background-color: ${COLOR.ACCENT4};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: ${BORDER_RADIUS.SECOND};
  overflow: hidden;
  z-index: 100;
`;

export const Text = styled.div`
  line-height: 26px;
  font-size: 22px;
`;
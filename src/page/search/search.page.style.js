import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const InputWrapper = styled.div`
  background-color: ${COLOR.ACCENT4};
  padding: 10px;
  border-radius: ${BORDER_RADIUS.SECOND};
  margin: 0 0 15px 0;
`;

export const CitiesWrapper = styled.div`
  border-radius: ${BORDER_RADIUS.SECOND};
  background-color: ${COLOR.ACCENT4};
  padding: 10px;
`;

export const ArrowWrapper = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT5};
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  span {
    display: block;
    margin: 0 0 0 5px;
  }
  svg{
    color: ${COLOR.ACCENT5};
  }
`;
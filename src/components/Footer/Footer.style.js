import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";

export const Wrapper = styled.div`
  max-width: 414px;
  background-color: ${COLOR.WHITE};
  margin: 0 auto;
  padding: 0 0 130px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: center;
  ${FONT.SIZE_18};
  ${FONT.WEIGHT_400};
  border-bottom: 1px ${COLOR.ACCENT2} solid;
  color: ${COLOR.ACCENT1};
  a {
    color: unset;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const LocationInfo = styled.div`
  ${FONT.SIZE_16};
  ${FONT.WEIGHT_400};
  color: ${COLOR.ACCENT1};
  margin: 16px auto 16px auto;
  text-align: center;
`;
export const Support = styled.div`
  ${FONT.SIZE_16};
  ${FONT.WEIGHT_400};
  margin: 16px 0 0 0;
  border: none;
  display: flex;
  justify-content: center;
  color: ${COLOR.ACCENT1};
  
`;
import styled from "styled-components";
import {COLOR, GRADIENT} from "utils/theme";

export const Wrapper = styled.div`
  height: 499px;
  max-width: 414px;
  background-image: linear-gradient(180deg, ${COLOR.ACCENT1} 55.42%, #202429 100%);
  margin: 0 auto;
`;

export const Row = styled.div`
  border-bottom: 1px ${COLOR.ACCENT2} solid;
  width: 100%;
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT2};
  padding: 15px;
`;

export const LocationInfo = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT2};
  margin: 46px auto 74px auto;
  text-align: center;
`;
export const Support = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 34px 0 0 0;
  border: none;
  display: flex;
  justify-content: center;
  color: ${COLOR.ACCENT2};
  a {
    color: unset;
  }
`;
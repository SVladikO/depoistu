import styled from "styled-components";
import {COLOR, GRADIENT} from "../../utils/theme";
import {Link} from "react-router-dom";

export const Wrapper =  styled.div`
  height: 499px;
  width: 100%;
  background-image: linear-gradient(180deg, ${COLOR.ACCENT1} 55.42%, #202429 100%);
`;

export const LinkItem = styled(Link)`
  border-bottom: 1px ${COLOR.ACCENT2} solid;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT2};
  padding: 15px;
  &:nth-child(5) {
    margin: 34px 0 0 0;
    border: none;
  }
`;

export const LocationInfo = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT2};
  margin: 46px auto 74px auto;
  text-align: center;
`;
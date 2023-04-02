import styled from "styled-components";
import {COLOR,BORDER_RADIUS, GRADIENT} from "../../utils/theme";

export const Wrapper = styled.div`
  
`;
export const EditBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto 10px auto;
`;
export const CompanyEditSection = styled.div``;

export const EditButton = styled.button`
  border-radius: ${BORDER_RADIUS.FOURTH};
  min-width: 170px;
  height: 50px;
  background: linear-gradient(${GRADIENT.FROM}, ${GRADIENT.TO});
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT4};
  & span {
    display: block;
    margin: 0 0 0 10px;
  }
  svg {
    color: ${COLOR.ACCENT4};
    width: 18px;
    height: 20px;
  }
`;

import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";

export const Wrapper = styled.div`
  margin: 0 auto;
`;
export const Employee = styled.div`
  text-align: center;
  margin: 0 0 30px 0;
`;

export const Photo = styled.img`
  width: 204px;
  height: 204px;
  object-fit: cover;
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 0 0 5px 0;
`;
export const FullName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 10px 0;
  
  > a {
    color: ${COLOR.ACCENT1};
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
  }
  
  > svg {
    fill: ${COLOR.ACCENT1};
    width: 20px;
    height: 20px;
  }
`;
export const Position = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${COLOR.ACCENT5};
  margin: 0 0 10px 0;
`;
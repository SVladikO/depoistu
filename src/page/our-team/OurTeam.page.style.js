
import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "utils/theme";
import bg from 'assets/dev_bg.png';

export const Wrapper = styled.div`
  background-color: #fff;
  min-width: 375px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Employee = styled.div`
  text-align: center;
  margin: 24px 16px;
  border: 1px solid ${COLOR.ACCENT2};
  width: 92%;
  border-radius: 5px;
`;
export const EmployeeView = styled.div`
  width: 100%;
  background: url(${bg});
  height: 164px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmployeeInfo = styled.div`
  margin: 16px 0 0 0;
`;
export const Photo = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 0 0 5px 0;
`;
export const FullName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 4px 0;
  font-size: 24px;
  > a {
    color: ${COLOR.ACCENT1};
    font-weight: 400;
    line-height: 29px;
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
  margin: 0 0 4px 0;
`;
export const Border = styled.div`
  border: 1px solid ${COLOR.ACCENT2};
  transform: rotate(180);
  width: 100%;
`;
export const Socials = styled.div`
  margin: 0 0 16px 0;
  svg {
    width: 28px;
    height: 28px;
  }
`;
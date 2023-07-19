import styled from "styled-components";
import {COLOR, BORDER_RADIUS, SHADOW} from "../../utils/theme";

export const Wrapper = styled.div`
  ${SHADOW};
  border-radius: ${BORDER_RADIUS.SECOND};
  height: auto;
  overflow: hidden;
  perspective: 1px;
  background-color: ${COLOR.ACCENT4};
  margin: 0 0 10px 0;
  
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background-color: ${COLOR.ACCENT4};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${COLOR.ACCENT3};
  }
`;
export const Content = styled.div`
  padding: 10px;
`;
export const ScheduleWrapper = styled.div`
  color: ${COLOR.ACCENT1};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  flex-wrap: nowrap;
  color: ${COLOR.ACCENT5};
  display: flex;
`;

export const DaySchedule = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.isToday ? COLOR.ACCENT1 : COLOR.ACCENT5};
`;
export const From = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.isToday ? COLOR.ACCENT1 : COLOR.ACCENT5};
  
`;
export const To = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.isToday ? COLOR.ACCENT1 : COLOR.ACCENT5};
`;

export const ScheduleContainer = styled.div`
  display: flex;

  & > * {
    min-width: 50px;
  }
  > div {
    margin: 0 4px 0 0;
  }
`;
export const ScheduleContent = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  
  & > div {
    margin: 0 1px 0 0;
  }
`;

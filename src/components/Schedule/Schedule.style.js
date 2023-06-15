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
export const DetailedLink = styled.div`
  text-decoration: underline;
  color: ${COLOR.ACCENT5};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
export const Day = styled.div`
  color: ${props => props.isToday ? COLOR.ACCENT3 : COLOR.ACCENT5};
}
`;
export const ScheduleContainer = styled.div`
  & > * {
    min-width: 50px;
  }
`;
export const ScheduleContent = styled.div`
  display: flex;
  & > div {
    margin: 0 1px 0 0;
  }
`;

import styled from "styled-components";
import {COLOR,BORDER_RADIUS} from "../../utils/theme";

export const Wrapper = styled.div`

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
  .swiper-pagination-bullet-active{
    background-color: ${COLOR.ACCENT3};
  }
`;

export const ImageSection = styled.div`
  display: flex;
  height: 200px;
  max-height: 200px;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Content = styled.div`
  & > * {
    width: 50%;
  }
  display: flex;
  justify-content: space-between;
`;
export const CompanyInfo = styled.div`
  margin: 10px auto 10px 10px;
  text-align: left;
  justify-self: start;
`;

export const ScheduleWrapper = styled.div`
  text-align: right;
  justify-self: flex-end;
  color: ${COLOR.ACCENT1};
  margin: 10px 10px 10px 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  flex-wrap: nowrap;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
`;

export const ScheduleContainer = styled.div`
 & > * {
   min-width: 50px;
 }  
`;
export const Address = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLOR.ACCENT1};
`;

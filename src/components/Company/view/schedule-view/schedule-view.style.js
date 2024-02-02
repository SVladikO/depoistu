import styled from "styled-components";
import {COLOR, BORDER_RADIUS, SHADOW, FONT} from "utils/theme";

export const Wrapper = styled.div`
    ${SHADOW};
    border-radius: ${BORDER_RADIUS.SECOND};
    height: auto;
    overflow: hidden;
    perspective: 1px;
    background-color: ${COLOR.WHITE};
    margin: 0 0 10px 0;

    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: ${COLOR.WHITE};
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background-color: ${COLOR.SECONDARY};
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
    ${FONT.SIZE_16};
    ${FONT.WEIGHT_400};
    line-height: 24px;
    color: ${COLOR.ACCENT1};
`;

const dayDefault = styled.div`
    ${FONT.SIZE_16};
    ${FONT.WEIGHT_500};
    color: ${props => props.isToday ? COLOR.WHITE : COLOR.ACCENT1};
    border: ${props => props.isToday ? COLOR.ACCENT1 : COLOR.ACCENT5}  solid 1px;
    background: ${props => props.isToday ? COLOR.ACCENT1 : 'none' };
    line-height: 24px;
    display: flex;
    justify-content: center;
`

export const From = styled(dayDefault)`
    border-radius: ${BORDER_RADIUS.DAY_IN_SCHEDULE} ${BORDER_RADIUS.DAY_IN_SCHEDULE} 0 0;
`;
export const To = styled(dayDefault)`
    border-radius: 0 0 ${BORDER_RADIUS.DAY_IN_SCHEDULE} ${BORDER_RADIUS.DAY_IN_SCHEDULE};
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
    margin: 16px 0 0 0;

    & > div {
        margin: 0 1px 0 0;
    }

    padding: 0 0 6px;
`;

export const Border = styled.div`
    border: 1px solid #e7e7e7;
`;

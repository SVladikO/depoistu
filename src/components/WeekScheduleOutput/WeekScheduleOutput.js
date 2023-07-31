import React, {useState} from "react";

import {DaySchedule, From, To, ScheduleContainer, ScheduleContent, ScheduleWrapper} from "./WeekScheduleOutput.style";

import {ThirdButton} from '../Button/Button.style';
import {translate, TRANSLATION as TR} from "../../utils/translation";

const ScheduleDetails = ({scheduleAsArray}) => {
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (isWeekScheduleVisible) {
        return (
            <ScheduleContent>
                {
                    scheduleAsArray?.map((day, i) => {
                        const {dayName, from,to, isToday} = day;

                        return (
                            <ScheduleWrapper key={i.toString()}>
                                <ScheduleContainer>
                                    <div>
                                        <DaySchedule isToday={isToday}>{dayName}</DaySchedule>
                                        <From isToday={isToday}>{from}</From>
                                        <To isToday={isToday}>{to}</To>
                                    </div>
                                </ScheduleContainer>
                            </ScheduleWrapper>
                        )
                    })
                }
            </ScheduleContent>
        )
    }

    return (
        <ThirdButton onClick={() => setIsWeekScheduleVisible(true)}>
            {translate(TR.COMPONENTS.COMPANY.SCHEDULE_BUTTON)}
        </ThirdButton>
    )
}

export default ScheduleDetails;

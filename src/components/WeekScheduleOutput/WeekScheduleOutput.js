import React, {useState} from "react";

import {DaySchedule, From, To, ScheduleContainer, ScheduleContent, ScheduleWrapper, Border} from "./WeekScheduleOutput.style";

import {translate, TRANSLATION as TR} from "../../utils/translation";
import {ThirdButton} from "../Buttons/ThirdButton";

const ScheduleDetails = ({scheduleAsArray}) => {
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (isWeekScheduleVisible) {
        return (
            <>
                <Border/>
                <ScheduleContent>
                    {
                        scheduleAsArray?.map((day, i) => {
                            const {dayName, from,to, isToday} = day;

                            return (
                                <ScheduleWrapper key={i.toString()} className="schedule-output">
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
            </>
        )
    }

    return (
        <ThirdButton isShowDetails onClick={() => setIsWeekScheduleVisible(true)}>
            {translate(TR.COMPONENTS.COMPANY.SCHEDULE_BUTTON)}
        </ThirdButton>
    )
}

export default ScheduleDetails;

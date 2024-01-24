import React, {useState} from "react";

import {
    DaySchedule,
    From,
    To,
    ScheduleContainer,
    ScheduleContent,
    ScheduleWrapper,
    Border
} from "./schedule-view.style";

import {translate, TRANSLATION as TR} from "utils/translation";
import {ThirdButton} from "components/Buttons/ThirdButton";
import {parseSchedule} from "utils/company";

const ScheduleDetails = ({company, withMoreInfo}) => {
    const scheduleAsArray = parseSchedule(company.schedule);
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (!withMoreInfo) {
        return;
    }

    if (!isWeekScheduleVisible) {
        return (
            <ThirdButton isShowDetails onClick={() => setIsWeekScheduleVisible(true)}>
                {translate(TR.COMPONENTS.COMPANY.SHOW_SCHEDULE_BUTTON)}
            </ThirdButton>
        )
    }

    return (
        <>
            <ThirdButton isShowDetails onClick={() => setIsWeekScheduleVisible(false)}>
                {translate(TR.COMPONENTS.COMPANY.HIDE_SCHEDULE_BUTTON)}
            </ThirdButton>
            <Border/>
            <ScheduleContent>
                {
                    scheduleAsArray.workDays?.map((day, i) => {
                        const {dayName, from, to, isToday} = day;

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

export default ScheduleDetails;
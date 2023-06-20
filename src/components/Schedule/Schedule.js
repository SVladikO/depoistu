import React, {useState} from "react";
import {DaySchedule, From, To, ShowDetailedSchedule, ScheduleContainer, ScheduleContent, ScheduleWrapper} from "./Schedule.style";

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
        <ShowDetailedSchedule onClick={() => setIsWeekScheduleVisible(true)}>
            Show schedule
        </ShowDetailedSchedule>
    )
}

export default ScheduleDetails;

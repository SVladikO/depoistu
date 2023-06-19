import React, {useState} from "react";
import {Day, From, To, DetailedLink, ScheduleContainer, ScheduleContent, ScheduleWrapper} from "./Schedule.style";

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
                                        <Day isToday={isToday}>{dayName}</Day>
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
        <DetailedLink onClick={() => setIsWeekScheduleVisible(true)}>
            Show schedule
        </DetailedLink>
    )
}

export default ScheduleDetails;

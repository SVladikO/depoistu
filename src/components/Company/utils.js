import React, {useState} from "react";
import {Day, DetailedLink, ScheduleContainer, ScheduleContent, ScheduleWrapper} from "./Company.style";
import {ScheduleParser} from "../../utils/schedule";

const ScheduleDetails = ({scheduleAsArray}) => {
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (isWeekScheduleVisible) {
        return (
            <ScheduleContent>
                {
                    scheduleAsArray?.map((day, i) => {
                        const {dayName, from,to} = day;

                        return (
                            <ScheduleWrapper key={i.toString()}>
                                <ScheduleContainer>
                                    <div>
                                        <Day isToday={ScheduleParser.isToday(i)}>{dayName}</Day>
                                        <div>{from}</div>
                                        <div>{to}</div>
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

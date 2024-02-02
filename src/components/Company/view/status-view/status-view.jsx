import React from "react";

import {Closes, OpenStatus, Schedule} from "./status-view.styles";

import {ReactComponent as TimeIcon} from "assets/icons/time.svg";

import {parseSchedule} from "utils/company";
import {translate, TRANSLATION as TR} from "utils/translation";

const StatusView = ({company}) => {
    const parsedSchedule = parseSchedule(company.schedule);

    return (
        <Schedule>
            <OpenStatus>
                <TimeIcon className="time_icon"/>
                {parsedSchedule.isCompanyOpenNow ? translate(TR.COMPONENTS.COMPANY.STATUS_OPEN) : translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}
            </OpenStatus>
            {parsedSchedule.isCompanyOpenNow &&
                <Closes>{translate(TR.COMPONENTS.COMPANY.TILL)} {parsedSchedule.currentDay.to}</Closes>}
        </Schedule>
    )
}

export default StatusView;

import {FromToTime} from "../index";
import React from "react";

function WeekScheduleInput({values, handleChange}) {
    const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    const prefixes = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    return prefixes.map((key, index) =>
        <FromToTime
            key={key}
            prefix={key}
            dayName={days[index]}
            values={values}
            handleChange={handleChange}
        />
    )
}

export default WeekScheduleInput;
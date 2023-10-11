import React from "react";

import FromToTime from "components/FromToTime/FromToTime";
import {weekDayNames} from "utils/company";

function WeekScheduleInput({values, handleChange, setFieldValue}) {
    const prefixes = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    return prefixes.map((key, index) =>
        <FromToTime
            key={key}
            prefix={key}
            dayName={weekDayNames[index]}
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
        />
    )
}

export default WeekScheduleInput;

export function getScheduleAsObject(schedule) {
    const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    let obj = {};

    schedule = schedule
        .split(',')
        .map(el => el.trim())

    weekDayNames.forEach((el,i) =>{
        obj[el] = schedule[i];
    })
    return obj;
}

export const getScheduleAsString = values => {
    let result = ''

    result += values.monIsChecked ? `${values.monFrom}-${values.monTo},` : ',';
    result += values.tueIsChecked ? `${values.tueFrom}-${values.tueTo},` : ',';
    result += values.wedIsChecked ? `${values.wedFrom}-${values.wedTo},` : ',';
    result += values.thuIsChecked ? `${values.thuFrom}-${values.thuTo},` : ',';
    result += values.friIsChecked ? `${values.friFrom}-${values.friTo},` : ',';
    result += values.satIsChecked ? `${values.satFrom}-${values.satTo},` : ',';
    result += values.sunIsChecked ? `${values.sunFrom}-${values.sunTo}` : '';

    return result;
}

export const isScheduleValid = values =>
    values.monIsChecked ||
    values.tueIsChecked ||
    values.wedIsChecked ||
    values.thuIsChecked ||
    values.friIsChecked ||
    values.satIsChecked ||
    values.sunIsChecked;

export function initSchedule(schedule) {
    const times = schedule.split(',')?.map(el => el.trim());
    let result = {};
    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        .forEach((key, index) => {
            const [from, to] = times[index]?.split('-') ?? "";
            result[key] = {
                isChecked: !!times[index],
                from: from?.replace('.', ':'),
                to: to?.replace('.', ':')
            };
        })
    return result;
}
export function checkIsToday (i) {
    let currentDayIndex = new Date().getDay();

    if(currentDayIndex === 0){
        currentDayIndex = 7;
    }

    return (i+1) === currentDayIndex;
}
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

const uaWeekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const getCurrentDay = days => days.find((el, i) => isToday(i));
const cutOnDays = schedule => schedule.split(',')?.map(el => el.trim());
const isToday = dayIndex => (dayIndex + 1) === (new Date().getDay() || 7);
const addMarkerToCurrentDay = (el, i) => isToday(i) ? {...el, isToday: true} : el;
const addDayName = (fromTo, index) => ({dayName: uaWeekDayNames[index], ...fromTo});

export function parseSchedule(scheduleAsString) {
    const workDays = cutOnDays(scheduleAsString)
        .map(convertToObject)
        .map(addDayName)
        .map(addMarkerToCurrentDay);
    //Expected workDays = [{ from: '9:00', to: '21:00', isToday: true }, ... ]
    const currentDay = getCurrentDay(workDays);
    const isCompanyOpenNow = checkIsCompanyOpenNow(currentDay);

    return {workDays, currentDay, isCompanyOpenNow}
};

function convertToObject(day) {
    const [from = '', to = ''] = day ? day?.split('-') : ['', ''];

    return {from, to};
}

function checkIsCompanyOpenNow({from, to}) {
    const f = convertToNumber(from);
    const t = convertToNumber(to);
    const currentTime = getCurrentTimeAsNumber();

    return currentTime > f && currentTime < t;
}

function convertToNumber(time) {
    const [a, b] = time ? time.split(':') : ['', ''];
    return +(a + b);
}

function getCurrentTimeAsNumber() {
    const date = new Date();
    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    const correctMinutes = currentMinutes < 10 ? 0 : '';

    return +(currentHours + correctMinutes + currentMinutes);
}
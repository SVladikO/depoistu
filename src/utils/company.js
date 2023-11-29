import {translate, TRANSLATION} from "./translation";

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

export function initSchedule(schedule = ',,,,,,,') {
    const times = schedule?.split(',')?.map(el => el.trim());
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

export const weekDayNames = [
    translate(TRANSLATION.WEEK_DAY.MON),
    translate(TRANSLATION.WEEK_DAY.TU),
    translate(TRANSLATION.WEEK_DAY.WED),
    translate(TRANSLATION.WEEK_DAY.TH),
    translate(TRANSLATION.WEEK_DAY.FRI),
    translate(TRANSLATION.WEEK_DAY.SAT),
    translate(TRANSLATION.WEEK_DAY.SUN),
];

const getCurrentDay = days => days.find((el, i) => isToday(i));
const cutOnDays = (schedule = ',,,,,,,') => schedule.split(',')?.map(el => el.trim());
const isToday = dayIndex => (dayIndex + 1) === (new Date().getDay() || 7);
const addMarkerToCurrentDay = (el, i) => isToday(i) ? {...el, isToday: true} : el;
const addDayName = (fromTo, index) => ({dayName: weekDayNames[index], ...fromTo});

export function parseSchedule(scheduleAsString) {
    const workDays = cutOnDays(scheduleAsString)
        .map(convertToObject)
        .map(addDayName)
        .map(addMarkerToCurrentDay);
    //Expected workDays = [{ from: '9:00', to: '21:00', isToday: true }, ... ]
    const currentDay = getCurrentDay(workDays);
    const isCompanyOpenNow = checkIsCompanyOpenNow(currentDay);

    return {workDays, currentDay, isCompanyOpenNow}
}

function convertToObject(day) {
    const [from = '', to = ''] = day ? day?.split('-') : ['-', '-'];

    return {from, to};
}

function checkIsCompanyOpenNow({from, to}) {
    to = to === '00:00' ? '23:59' : to;

    if (!from || !to) {
        return false;
    }

    const fromTime = getTimeFrom(from);
    const currentTime = new Date();
    const toTime = getTimeFrom(to);

    return fromTime < currentTime && currentTime < toTime;
}

function getTimeFrom(time) {
    const [h, m] = time ? time.split(':') : ['', ''];
    const date = new Date();
    date.setHours(h, m, '00');

    return date
}

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

export class ScheduleParser {
    constructor(scheduleString) {
        this.scheduleString = scheduleString;                                    //  '9:00-21:00,,,,,,'
        this.workDays = ScheduleParser.cutOnDays(scheduleString);                // ['9:00-21:00',,,,,,]
        this.currentDayAsString = ScheduleParser.getCurrentDay(this.workDays);   //  '9:00-21:00'
        this.currentDayAsObject = ScheduleParser.fromTo(this.currentDayAsString);// { from: '9:00', to: '21:00' }
    }

    getScheduleAsArray() {
        return uaWeekDayNames.map((dayName, i) => {
            const {from, to} = ScheduleParser.fromTo(this.workDays[i]);

            return {dayName, from, to};
        });
    }

    getCurrentDayAsObject() {
        return this.currentDayAsObject;
    }

    checkIsCompanyOpenNow = function () {
        const {from, to} = this.currentDayAsObject;

        const f = +covertToNumber(from);
        const t = +covertToNumber(to);

        function covertToNumber(time) {
            const [a, b] = time.split(':') ?? ['',''];
            return a + b;
        }

        const d = new Date();
        const currentTime = +(d.getHours() + '' + d.getMinutes());
        console.log(888, f, currentTime, t, currentTime > f && currentTime < t)
        return currentTime > f && currentTime < t;

    }
}

ScheduleParser.cutOnDays = scheduleString =>  scheduleString.split(',')?.map(el => el.trim());

ScheduleParser.getCurrentDay = days => days.find((el, i) => ScheduleParser.isToday(i));

ScheduleParser.fromTo = day => {
    const [from, to] = day?.split('-');

    return {from, to};
}

ScheduleParser.isToday = function (dayIndex) {
    let currentDayIndex = new Date().getDay();

    if (currentDayIndex === 0) { // for Sunday only.
        currentDayIndex = 7;
    }

    return (dayIndex + 1) === currentDayIndex;
}

export function checkIsToday(i) {
    let currentDayIndex = new Date().getDay();

    if (currentDayIndex === 0) {
        currentDayIndex = 7;
    }

    return (i + 1) === currentDayIndex;
}
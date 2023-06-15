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

export const parseSchedule = (function () {
    const getCurrentDay = days => days.find((el, i) => isToday(i));
    const cutOnDays = schedule => schedule.split(',')?.map(el => el.trim());
    const isToday = dayIndex => (dayIndex + 1) === (new Date().getDay() || 7);
    const addMarkerToCurrentDay = (el, i) => isToday(i) ? {...el, isToday: true} : el;
    const addDayName = (fromTo, index) => ({dayName: uaWeekDayNames[index], ...fromTo});

    return function (scheduleAsString) {
        const workDays = cutOnDays(scheduleAsString)
            .map(convertToObject)
            .map(addDayName)
            .map(addMarkerToCurrentDay);
        const currentDay = getCurrentDay(workDays);  // Expected to be { from: '9:00', to: '21:00' }
        const isCompanyOpenNow = checkIsCompanyOpenNow(currentDay);

        return {workDays, currentDay, isCompanyOpenNow}
    }

    function convertToObject(day) {
        const [from = '', to = ''] = day ? day?.split('-') : ['', ''];

        return {from, to};
    }

    function checkIsCompanyOpenNow({from, to}) {
        const f = +covertToNumber(from);
        const t = +covertToNumber(to);

        const currentTime = +(d => d.getHours() + '' + d.getMinutes())(new Date());

        return currentTime > f && currentTime < t;

        function covertToNumber(time) {
            const [a, b] = time ? time.split(':') : ['', ''];
            return a + b;
        }
    }
})();

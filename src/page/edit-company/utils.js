const defaultFrom = '09:00';
const defaultTo = '21:00';

const getInitialValues = (company, schedule) => (
    {
        photos: company?.PHOTOS?.split(',') || [],
        name: company.NAME,
        city: company.CITY,
        street: company.STREET,
        phone: company.PHONE,
        monIsChecked: !!schedule.mon.from || !!schedule.mon.to,
        monFrom: schedule.mon.from,
        monTo: schedule.mon.to,
        tueIsChecked: !!schedule.tue.from || !!schedule.tue.to,
        tueFrom: schedule.tue.from || defaultFrom,
        tueTo: schedule.tue.to || defaultTo,
        wedIsChecked: !!schedule.wed.from || !!schedule.wed.to,
        wedFrom: schedule.wed.from || defaultFrom,
        wedTo: schedule.wed.to || defaultTo,
        thuIsChecked: !!schedule.thu.from || !!schedule.thu.to,
        thuFrom: schedule.thu.from || defaultFrom,
        thuTo: schedule.thu.to || defaultTo,
        friIsChecked: !!schedule.fri.from || !!schedule.fri.to,
        friFrom: schedule.fri.from || defaultFrom,
        friTo: schedule.fri.to || defaultTo,
        satIsChecked: !!schedule.sat.from || !!schedule.sat.to,
        satFrom: schedule.sat.from || defaultFrom,
        satTo: schedule.sat.to || defaultTo,
        sunIsChecked: !!schedule.sun.from || !!schedule.sun.to,
        sunFrom: schedule.sun.from || defaultFrom,
        sunTo: schedule.sun.to || defaultTo,
    }
);

export default getInitialValues;
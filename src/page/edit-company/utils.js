const defaultFrom = '09:00';
const defaultTo = '21:00';

const getInitialValues = (company, schedule) => (
    {
        photos: company?.photos?.split(',') ||
            ['https://res.cloudinary.com/dgdm0wb3u/image/upload/v1702323715/w6cny3g83vtxezqhrgb3.jpg','https://res.cloudinary.com/dgdm0wb3u/image/upload/v1702323715/w6cny3g83vtxezqhrgb3.jpg','https://res.cloudinary.com/dgdm0wb3u/image/upload/v1702323715/w6cny3g83vtxezqhrgb3.jpg'],
        name: company.name,
        cityId: company.cityId,
        street: company.street,
        phone1: company.phone1,
        phone2: company.phone2,
        phone3: company.phone3,
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
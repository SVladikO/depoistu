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
        tueFrom: schedule.tue.from || '09:00',
        tueTo: schedule.tue.to || '21:00',
        wedIsChecked: !!schedule.wed.from || !!schedule.wed.to,
        wedFrom: schedule.wed.from || '09:00',
        wedTo: schedule.wed.to || '21:00',
        thuIsChecked: !!schedule.thu.from || !!schedule.thu.to,
        thuFrom: schedule.thu.from || '09:00',
        thuTo: schedule.thu.to || '21:00',
        friIsChecked: !!schedule.fri.from || !!schedule.fri.to,
        friFrom: schedule.fri.from || '09:00',
        friTo: schedule.fri.to || '21:00',
        satIsChecked: !!schedule.sat.from || !!schedule.sat.to,
        satFrom: schedule.sat.from || '09:00',
        satTo: schedule.sat.to || '21:00',
        sunIsChecked: !!schedule.sun.from || !!schedule.sun.to,
        sunFrom: schedule.sun.from || '09:00',
        sunTo: schedule.sun.to || '21:00',
    }
);

export default getInitialValues;
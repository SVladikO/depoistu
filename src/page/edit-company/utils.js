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
        tueFrom: schedule.tue.from,
        tueTo: schedule.tue.to,
        wedIsChecked: !!schedule.wed.from || !!schedule.wed.to,
        wedFrom: schedule.wed.from,
        wedTo: schedule.wed.to,
        thuIsChecked: !!schedule.thu.from || !!schedule.thu.to,
        thuFrom: schedule.thu.from,
        thuTo: schedule.thu.to,
        friIsChecked: !!schedule.fri.from || !!schedule.fri.to,
        friFrom: schedule.fri.from,
        friTo: schedule.fri.to,
        satIsChecked: !!schedule.sat.from || !!schedule.sat.to,
        satFrom: schedule.sat.from,
        satTo: schedule.sat.to,
        sunIsChecked: !!schedule.sun.from || !!schedule.sun.to,
        sunFrom: schedule.sun.from,
        sunTo: schedule.sun.to,
    }
);

export default getInitialValues;
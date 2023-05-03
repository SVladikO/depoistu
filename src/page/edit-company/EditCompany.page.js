import * as Yup from 'yup';
import {Formik} from "formik";
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useMemo, useState} from "react";

import "swiper/css";
import "swiper/css/pagination";
import {Divider, BasketButton, Pictures} from "./EditCompany.style";

import {
    ContentContainer,
    FromToTime,
    Input,
    Label,
    PInput,
    PopupCity,
    PrimaryButton,
    SecondaryButton
} from "../../components";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {company_validation} from "../../utils/validation";

const EditCompany = () => {
    const companyId = +useParams().companyId;
    const CUSTOMER_COMPANIES = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const company = CUSTOMER_COMPANIES.find((c => c.ID === companyId));

    const [pictures, setPictures] = useState(company?.PHOTOS?.split(',') || []);

    const [city, setCity] = useState(company.CITY);
    const [showCityPopup, setShowCityPopup] = useState(false);

    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));
    const schedule = initSchedule(company?.SCHEDULE);

    const openCityPopup = () => setShowCityPopup(true);
    const closeCityPopup = () => setShowCityPopup(false);
    const selectCity = ([city]) => {
        setCity(city);
        closeCityPopup();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const companyPictures = useMemo(() => renderPictures(pictures, deleteCompanyImage), [pictures])
    return (
        <>
            <SecondaryButton isWide><RemoveIcon/> Delete company</SecondaryButton>
            <Formik
                initialValues={{
                    name: company.NAME,
                    street: company.STREET,
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
                }}
                validationSchema={Yup.object().shape(company_validation)}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({values, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        {companyPictures}
                        <ContentContainer>
                            <Label>Company Name</Label>
                            <Input
                                name='name'
                                value={values.name}
                                withCleaner
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                errorMessage={errors.name}
                            />
                            <Label>City</Label>
                            <PInput
                                withIcon
                                Icon={LocationIcon}
                                handleClick={openCityPopup}
                                value={city}
                            />
                            <Label>Street</Label>
                            <Input
                                name='street'
                                value={values.street}
                                withCleaner
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('street', '')}
                                errorMessage={errors.street}
                            />
                            <Label>Work Schedule</Label>
                            <FromToTime checkboxName={'monIsChecked'} isChecked={values.monIsChecked} dayName={'ПН'} nameFrom={"monFrom"} valueFrom={values.monFrom} nameTo={"monTo"} valueTo={values.monTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'tueIsChecked'} isChecked={values.tueIsChecked} dayName={'ВТ'} nameFrom={"tueFrom"} valueFrom={values.tueFrom} nameTo={"tueTo"} valueTo={values.tueTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'wedIsChecked'} isChecked={values.wedIsChecked} dayName={'СР'} nameFrom={"wedFrom"} valueFrom={values.wedFrom} nameTo={"wedTo"} valueTo={values.wedTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'thuIsChecked'} isChecked={values.thuIsChecked} dayName={'ЧТ'} nameFrom={"thuFrom"} valueFrom={values.thuFrom} nameTo={"thuTo"} valueTo={values.thuTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'friIsChecked'} isChecked={values.friIsChecked} dayName={'ПТ'} nameFrom={"friFrom"} valueFrom={values.friFrom} nameTo={"friTo"} valueTo={values.friTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'satIsChecked'} isChecked={values.satIsChecked} dayName={'СБ'} nameFrom={"satFrom"} valueFrom={values.satFrom} nameTo={"satTo"} valueTo={values.satTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'sunIsChecked'} isChecked={values.sunIsChecked} dayName={'ВС'} nameFrom={"sunFrom"} valueFrom={values.sunFrom} nameTo={"sunTo"} valueTo={values.sunTo} handleChange={handleChange}/>
                        </ContentContainer>
                        <PrimaryButton type={'submit'} isWide>Save changes</PrimaryButton>
                    </form>
                )}
            </Formik>
            {showCityPopup && <PopupCity selectCity={selectCity} closePopup={closeCityPopup}/>
            }
        </>
    )
};

function initSchedule(schedule) {
    const times = schedule.split(',')?.map(el => el.trim());
    let result = {};

    ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        .map((key, index) => {
            const [from, to] = times[index]?.split('-');
            result[key] = {
                isChecked: !!times[index],
                from: from?.replace('.', ':'),
                to: to?.replace('.', ':')
            };
        })

    return result;
}

function renderPictures(pictures, deleteCompanyImage) {
    return (
        <>
            <Pictures>
                <Swiper
                    className="mySwiper"
                    slidesPerView={2}
                    spaceBetween={10}
                >
                    {
                        pictures.map((el, index) => (
                            <SwiperSlide key={Math.random()}>
                                <img src={el} alt=''/>
                                <BasketButton onClick={() => deleteCompanyImage(index)}>
                                    <DeleteBasketIcon/>
                                </BasketButton>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Pictures>
            <SecondaryButton isWide>+Photo</SecondaryButton>
            <Divider/>
        </>
    )
}

export default EditCompany;
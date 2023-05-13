import * as Yup from 'yup';
import {Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useMemo, useState} from "react";

import "swiper/css";
import "swiper/css/pagination";
import {Divider, BasketButton, Pictures} from "./EditCompany.style";

import {
    ContentContainer,
    Input,
    Label, Notification,
    PInput,
    Popup,
    PrimaryButton,
    SecondaryButton,
    WeekSchedule
} from "../../components";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import validation from "../../utils/validation";
import {initSchedule} from "../../utils/utils";
import {fetchData} from "../../utils/fetch";
import {BE_API, URL} from "../../utils/config";

//We need this variable after call LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) on delete company success
//when we open customer companies page it will make request to BE and user will have updated list of companies.
const companyFakeData = {
    CITY: '',
    SCHEDULE: ',,,,,,',
    PHOTOS: '',
}

const EditCompany = () => {
    const navigate = useNavigate();
    const companyId = +useParams().companyId;
    const customerCompaniesFromLocalStorage = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES) || [{ID: companyId, ...companyFakeData}];
    const companies = customerCompaniesFromLocalStorage.length ? customerCompaniesFromLocalStorage : [{ID: companyId, ...companyFakeData}];
    const company = companies.find((c => c.ID === companyId));

    const [city, setCity] = useState(company.CITY);
    const schedule = initSchedule(company?.SCHEDULE);
    const [pictures, setPictures] = useState(company?.PHOTOS?.split(',') || []);

    const [isLoading, setIsLoading] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [isCompanyDeleted, setIsCompanyDeleted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const openCityPopup = () => setShowCityPopup(true);

    const closeCityPopup = () => setShowCityPopup(false);

    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));

    const selectCity = ([city]) => {
        setCity(city);
        closeCityPopup();
    }

    const deleteCompany = () => {
        setIsLoading(true)

        fetchData(BE_API.DELETE_COMPANY_CREATE(companyId), {method: 'delete'})
            .then(res => {
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
                setIsCompanyDeleted(true);
            })
            .catch(res => setRequestError(res.status + " Error: " + res.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    const companyPictures = useMemo(() => renderPictures(pictures, deleteCompanyImage), [pictures])

    const redirectToCustomerCompanies = () => navigate(URL.CUSTOMER_COMPANIES);

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (isCompanyDeleted) {
        return (
            <Notification.Success message={`Company '${company.NAME}' from '${company.CITY}' was deleted.`}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies page.</Link>
            </Notification.Success>
        );
    }

    if (!customerCompaniesFromLocalStorage.length) {
        return (
            <Notification.Error message={'You can open company by this id'}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies page.</Link>
            </Notification.Error>
        );
    }

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <SecondaryButton isWide onClick={deleteCompany}><RemoveIcon/> Delete company</SecondaryButton>
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
                validationSchema={Yup.object().shape(validation.company)}
                onSubmit={values => {
                    console.log(values);
                    setWasSubmitted(true);
                }}
            >
                {({values, touched, handleBlur, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        {companyPictures}
                        <ContentContainer>
                            <Label>Company Name</Label>
                            <Input
                                name='name'
                                value={values.name}
                                withCleaner
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.name}
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
                                onBlur={handleBlur}
                                isTouched={wasSubmitted || touched.street}
                                withCleaner
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('street', '')}
                                errorMessage={errors.street}
                            />
                            <Label>Work Schedule</Label>
                            <WeekSchedule values={values} handleChange={handleChange}/>
                        </ContentContainer>
                        <PrimaryButton type={'submit'} isWide>Save changes</PrimaryButton>
                    </form>
                )}
            </Formik>
            {showCityPopup && <Popup.City selectCity={selectCity} onClose={closeCityPopup}/>
            }
        </>
    )
};

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
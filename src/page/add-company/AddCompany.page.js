import "swiper/css";
import * as Yup from "yup";
import {Formik} from "formik";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useState, useEffect, useMemo} from "react";

import {Divider} from "./AddCompany.style";
import {WarningMessage} from "../../components/Input/Input.style";

import {
    Input,
    Label,
    PInput,
    Popup,
    Notification,
    PrimaryButton,
    SecondaryButton,
    ContentContainer,
    WeekSchedule
} from "../../components";

import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import {BasketButton, Pictures} from "../edit-company/EditCompany.style";

import {BE_API, URL} from "../../utils/config";
import {fetchData} from "../../utils/fetch";
import validation from "../../utils/validation";
import {LOCAL_STORAGE_KEY, LocalStorage, getScheduleAsString, isScheduleValid} from "../../utils/utils";

import {initialValues} from './utils';

const CompanySchema = Yup.object().shape(validation.company);

const AddCompany = () => {
    const CUSTOMER = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER)
    const [isLoading, setIsLoading] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));

    const openCityPopup = () => setShowCityPopup(true);
    const closeCityPopup = () => setShowCityPopup(false);
    const selectCity = callback => ([city]) => {
        callback(city);
        closeCityPopup();
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const companyPictures = useMemo(() => renderPictures(pictures, deleteCompanyImage), [pictures])

    const onSubmit = values => {
        const {name, city, street, phone} = values;
        const schedule = getScheduleAsString(values)
        const customer_id = CUSTOMER.ID;

        const reqObj = {customer_id, name, city, street, phone, schedule};

        //Don't submit if there is no schedule
        if (!isScheduleValid(values)) {
            return;
        }

        setIsLoading(true)

        fetchData(BE_API.POST_COMPANY_CREATE(), reqObj)
            .then(res => {
                setIsCompanySaved(true);
                LocalStorage.remove(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES)
            })
            .catch(res => setRequestError(res.status + " Error: " + res.body.errorMessage))
            .finally(() => setIsLoading(false))
    }

    if (isLoading) {
        return <Notification.Loading/>;
    }

    if (isCompanySaved) {
        return (
            <Notification.Success message={"Company created."}>
                <Link to={URL.CUSTOMER_COMPANIES}>Open my companies</Link>
            </Notification.Success>
        );
    }

    return (
        <>
            {requestError && <Notification.Error message={requestError}/>}
            <Formik
                initialValues={initialValues}
                validationSchema={CompanySchema}
                onSubmit={onSubmit}
            >
                {({values, touched, setFieldValue, handleSubmit, handleBlur, handleChange, errors}) => (
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        {companyPictures}
                        <ContentContainer>
                            <Label>Company Name</Label>
                            <Input
                                name='name'
                                value={values.name}
                                withCleaner
                                isTouched={touched.name || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                errorMessage={errors.name}
                            />
                            <Label>City</Label>
                            <PInput
                                withIcon
                                Icon={LocationIcon}
                                handleClick={openCityPopup}
                                value={values.city}
                                errorMessage={errors.city}
                                isTouched={touched.city || wasSubmitted}
                                onBlur={handleBlur}
                            />
                            <Label>Street</Label>
                            <Input
                                name='street'
                                value={values.street}
                                withCleaner
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('street', '')}
                                isTouched={touched.street || wasSubmitted}
                                onBlur={handleBlur}
                                errorMessage={errors.street}
                            />
                            <Label>Phone</Label>
                            <Input
                                name="phone"
                                value={values.phone}
                                errorMessage={errors.phone}
                                isTouched={touched.phone || wasSubmitted}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone', '')}
                                withCleaner
                            />
                            <Label>Work Schedule</Label>
                            <WeekSchedule values={values} handleChange={handleChange}/>
                            {isScheduleValid(values) || <WarningMessage>'Schedule is a required field'</WarningMessage>}
                        </ContentContainer>
                        <PrimaryButton type='submit' isWide>Save changes</PrimaryButton>
                        {showCityPopup && <Popup.City selectCity={selectCity(city => setFieldValue('city', city))}
                                                     closePopup={closeCityPopup}/>}
                    </form>
                )}
            </Formik>
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
                        pictures?.map((el, index) => (
                            <SwiperSlide key={Math.random()}>s
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

export default AddCompany;
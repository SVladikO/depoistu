import React, {useState} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {Swiper, SwiperSlide} from "swiper/react";

import {Pictures, BasketButton, Divider} from './company-view.style'

import {
    ContentContainer,
    Input,
    Label,
    PInput,
    Popup,
    PrimaryButton,
    SecondaryButton,
    WeekScheduleInput
} from "../../components";

import {ReactComponent as LocationIcon} from "../../icons/location.svg";

import {WarningMessage} from "../../components/Input/Input.style";

import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import validation from "../../utils/validation";
import {isScheduleValid} from "../../utils/company";
import {getAllCities} from '../../utils/cities'

const renderCompanyPhotos = (photos, setPictures) => {
    const deleteImage = index => setPictures(photos.filter((_, i) => i !== index));

    return (
        <>
            <Pictures>
                <Swiper
                    className="mySwiper"
                    slidesPerView={2}
                    spaceBetween={10}
                >
                    {
                        photos?.map((src, index) => (
                            <SwiperSlide key={Math.random()}>
                                <img src={src} alt=''/>
                                <BasketButton onClick={() => deleteImage(index)}>
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
    );
}

const CompanyView = ({initialValues, onSubmit}) => {
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const openCityPopup = () => setShowCityPopup(true);
    const closeCityPopup = () => setShowCityPopup(false);

    const allCities = getAllCities();

    const selectCity = callback => ([city]) => {
        callback(city);
        closeCityPopup();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validation.company)}
            onSubmit={values => {
                setWasSubmitted(true);

                //Don't submit if there is no schedule
                if (!isScheduleValid(values)) {
                    return;
                }

                onSubmit(values);
            }}
        >
            {({values, touched, handleBlur, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    {renderCompanyPhotos(initialValues.photos, pictures => setFieldValue('photos', pictures))}
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
                            value={values.city}
                            isTouched={wasSubmitted || touched.city}
                            errorMessage={errors.city || errors.city_id}
                        />
                        {}
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
                        <WeekScheduleInput values={values} handleChange={handleChange}/>
                        {wasSubmitted && !isScheduleValid(values) && <WarningMessage>Schedule is a required field</WarningMessage>}
                    </ContentContainer>
                    {showCityPopup && (
                        <Popup.City
                            availableCities={allCities}
                            selectCity={selectCity(city => {
                                setFieldValue('city', city.name)
                                setFieldValue('city_id', city.id)
                            })}
                            onClose={closeCityPopup}
                        />
                    )}
                    <PrimaryButton type={'submit'} isWide>Save changes</PrimaryButton>
                </form>
            )}
        </Formik>
    )
};

export default CompanyView;

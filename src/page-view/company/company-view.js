import React, {useState, useMemo} from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {Swiper, SwiperSlide} from "swiper/react";

import {Pictures, BasketButton, Divider} from './company-view.style'

import {
    ContentContainer,
    Input,
    Label,
    CityInput,
    Popup,
    SecondaryButton,
    WeekScheduleInput
} from "components";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";
import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";

import WarningMessage from "components/WarningMessage/WarningMessage";

import {ReactComponent as DeleteBasketIcon} from "assets/icons/delete_basket.svg";

import validation from "utils/validation";
import {isScheduleValid} from "utils/company";
import {CITY_TRANSLATION_IDS, getOnlyCityIds} from 'utils/cities'
import {translate, TRANSLATION} from "utils/translation";

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
            <SecondaryButton isWide>{translate(TRANSLATION.PAGE_VIEW.COMPANY.ADD_IMAGE)}</SecondaryButton>
            <Divider/>
        </>
    );
}

const CompanyView = ({initialValues, onSubmit, children}) => {
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const openCityPopup = () => setShowCityPopup(true);

    const closeCityPopup = () => setShowCityPopup(false);

    const availableAllCityIds = useMemo(() => getOnlyCityIds(), []);

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
                    {/*{renderCompanyPhotos(initialValues.photos, pictures => setFieldValue('photos', pictures))}*/}
                    <ContentContainer noShadow>
                        <Input
                            name='name'
                            value={values.name}
                            withCleaner
                            onBlur={handleBlur}
                            isTouched={wasSubmitted || touched.name}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('name', '')}
                            errorMessage={errors.name}
                            labelName={translate(TRANSLATION.INPUT_LABEL.COMPANY.NAME)}
                            isRequired
                        />
                        <CityInput
                            withIcon
                            Icon={LocationIcon}
                            handleClick={openCityPopup}
                            labelName={translate(TRANSLATION.INPUT_LABEL.COMPANY.CITY)}
                            value={values.cityId && translate(CITY_TRANSLATION_IDS[values.cityId])}
                            isTouched={wasSubmitted || touched.cityId}
                            errorMessage={errors.city || errors.cityId}
                            isRequired
                        />
                        <Input
                            name='street'
                            value={values.street}
                            onBlur={handleBlur}
                            labelName={translate(TRANSLATION.INPUT_LABEL.COMPANY.STREET)}
                            isTouched={wasSubmitted || touched.street}
                            withCleaner
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('street', '')}
                            errorMessage={errors.street}
                            isRequired
                        />
                        <Input
                            Icon={PhoneIcon}
                            name="phone1"
                            type="number"
                            value={values.phone1}
                            labelName={`${translate(TRANSLATION.INPUT_LABEL.COMPANY.PHONE)} 1`}
                            errorMessage={errors.phone1}
                            isTouched={touched.phone1 || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('phone1', '')}
                            withCleaner
                            isRequired
                        />
                        <Input
                            labelName={`${translate(TRANSLATION.INPUT_LABEL.COMPANY.PHONE)} 2`}
                            Icon={PhoneIcon}
                            name="phone2"
                            type="number"
                            value={values.phone2}
                            errorMessage={errors.phone2}
                            isTouched={touched.phone2 || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('phone2', '')}
                            withCleaner
                        />
                        <Input
                            Icon={PhoneIcon}
                            name="phone3"
                            type="number"
                            value={values.phone3}
                            errorMessage={errors.phone3}
                            labelName={`${translate(TRANSLATION.INPUT_LABEL.COMPANY.PHONE)} 3`}
                            isTouched={touched.phone3 || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('phone3', '')}
                            withCleaner
                        />
                        <Label>{translate(TRANSLATION.INPUT_LABEL.COMPANY.WORK_SCHEDULE)}</Label>
                        <WeekScheduleInput values={values} handleChange={handleChange} setFieldValue={setFieldValue}/>
                        {wasSubmitted && !isScheduleValid(values) && <WarningMessage>Schedule is a required field</WarningMessage>}
                    </ContentContainer>
                    {showCityPopup && (
                        <Popup.City
                            availableCityIds={availableAllCityIds}
                            onSelectCity={selectCity(cityId => {
                                setFieldValue('cityId', cityId)
                            })}
                            onClose={closeCityPopup}
                        />
                    )}
                    {children}
                </form>
            )}
        </Formik>
    )
};

export default CompanyView;

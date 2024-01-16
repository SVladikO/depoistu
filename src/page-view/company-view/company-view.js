import React, {useState, useMemo} from "react";
import {SwiperSlide} from "swiper/react";
import * as Yup from "yup";

import {Formik} from "formik";

import {
    ContentContainer,
    Input,
    Label,
    CityInput,
    Popup,
    WeekScheduleInput,
    ImageUploaderButton,
    RowSplitter,
    SwiperWrapper,
    // SecondaryButton,
    // MapEditor
} from "components";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";
import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";

import WarningMessage from "components/WarningMessage/WarningMessage";
import ImageWithDelete from "components/ImageWithDelete/image-with-delete";

import validation from "utils/validation";
import {isScheduleValid} from "utils/company";
import ImageUrlFormatter from "utils/image.utils";
import {translate, TRANSLATION} from "utils/translation";
import {CITY_TRANSLATION_IDS, getOnlyCityIds} from 'utils/cities'

const CompanyView = ({initialValues, onSubmit, children}) => {
    const [showCityPopup, setShowCityPopup] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [photos, setPhotos] = useState(initialValues.photos || []);

    const openCityPopup = () => setShowCityPopup(true);
    const closeCityPopup = () => setShowCityPopup(false);
    const availableAllCityIds = useMemo(() => getOnlyCityIds(), []);

    const selectCity = callback => ([city]) => {
        callback(city);
        closeCityPopup();
    }

    const onImageUpload = info => {
        setPhotos(prevState => [...prevState, info.secure_url]);
    }

    const deleteImage = index => setPhotos(photos.filter((p, i) => i !== index));

    const imageSlides = photos?.map((src, index) => (
        <SwiperSlide>
            <ImageWithDelete
                src={ImageUrlFormatter.formatForCompany(src)}
                onDelete={() => deleteImage(index)}
            />
        </SwiperSlide>
    ));

    const setMapValue = values => {
        const mapInput = document.getElementsByClassName('map_input')[0];

        if (!mapInput || !values.cityId) {
            return;
        }
        const city = translate(CITY_TRANSLATION_IDS[values.cityId]);
        mapInput.value = `${city}, ${values.street}`
        mapInput.dispatchEvent(new Event('keyup', {'bubbles': true}));
    }


    return (
        <div>
            {photos.length <= 5 && <ImageUploaderButton onImageUpload={onImageUpload}/>}
            <RowSplitter height="22px"/>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(validation.company)}
                onSubmit={values => {
                    setWasSubmitted(true);

                    //Don't submit if there is no schedule
                    if (!isScheduleValid(values)) {
                        return;
                    }

                    onSubmit({...values, photos: photos.toString()});
                }}
            >
                {({values, touched, handleBlur, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>

                        {!!photos.length && <SwiperWrapper>{imageSlides}</SwiperWrapper>}

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
                                changeHandler={
                                    e => {
                                        setMapValue({...values, street: e.target.value})
                                        handleChange(e)
                                    }
                                }
                                clearHandler={() => setFieldValue('street', '')}
                                errorMessage={errors.street}
                                isRequired
                            />

                            {/*{!isShowMap && (*/}
                            {/*    <SecondaryButton isWide clickHandler={*/}
                            {/*        () => {*/}
                            {/*            setIsShowMap(true)*/}
                            {/*            setTimeout(() => setMapValue(values), 0)*/}
                            {/*        }*/}
                            {/*    }>Check address on map</SecondaryButton>*/}
                            {/*)}*/}
                            {/*{isShowMap && (*/}
                            {/*    <MapEditor*/}
                            {/*        name={'map'}*/}
                            {/*        position={[values.longitude, values.latitude]}*/}
                            {/*        setLat={(lat) => setFieldValue('latitude', lat)}*/}
                            {/*        setLng={(lng) => setFieldValue('longitude', lng)}*/}
                            {/*    />*/}
                            {/*)*/}
                            {/*}*/}

                            {/*<div>*/}
                                {/*<Input*/}
                                {/*    name="longitude"*/}
                                {/*    type="text"*/}
                                {/*    value={values.longitude}*/}
                                {/*    labelName={'longitude'}*/}
                                {/*    errorMessage={errors.longitude}*/}
                                {/*    isTouched={touched.longitude || wasSubmitted}*/}
                                {/*    changeHandler={handleChange}*/}
                                {/*    withCleaner*/}
                                {/*    isRequired*/}
                                {/*/>*/}
                                {/*<Input*/}
                                {/*    name="latitude"*/}
                                {/*    type="text"*/}
                                {/*    value={values.latitude}*/}
                                {/*    labelName={'latitude'}*/}
                                {/*    errorMessage={errors.latitude}*/}
                                {/*    isTouched={touched.latitude || wasSubmitted}*/}
                                {/*    changeHandler={handleChange}*/}
                                {/*    clearHandler={() => setFieldValue('latitude', '')}*/}
                                {/*    withCleaner*/}
                                {/*    isRequired*/}
                                {/*/>*/}
                            {/*</div>*/}
                            <Input
                                Icon={PhoneIcon}
                                name="phone1"
                                type="text"
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
                                type="text"
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
                                type="text"
                                value={values.phone3}
                                errorMessage={errors.phone3}
                                labelName={`${translate(TRANSLATION.INPUT_LABEL.COMPANY.PHONE)} 3`}
                                isTouched={touched.phone3 || wasSubmitted}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone3', '')}
                                withCleaner
                            />
                            <Label>{translate(TRANSLATION.INPUT_LABEL.COMPANY.WORK_SCHEDULE)}</Label>
                            <WeekScheduleInput values={values} handleChange={handleChange}
                                               setFieldValue={setFieldValue}/>
                            {wasSubmitted && !isScheduleValid(values) &&
                                <WarningMessage>{translate(TRANSLATION.VALIDATION.SCHEDULE_IS_REQUIRED)}</WarningMessage>}
                        </ContentContainer>
                        {showCityPopup && (
                            <Popup.City
                                availableCityIds={availableAllCityIds}
                                onSelectCity={selectCity(cityId => {
                                    setFieldValue('cityId', cityId)
                                    setMapValue({...values, cityId})
                                })}
                                onClose={closeCityPopup}
                            />
                        )}
                        {children}
                    </form>
                )}
            </Formik>
        </div>
    )
};


export default CompanyView;

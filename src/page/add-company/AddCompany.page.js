import "swiper/css";
import * as Yup from "yup";
import {Formik} from "formik";
import "swiper/css/pagination";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect, useMemo} from "react";

import {Divider} from "./AddCompany.style";
import {WarningMessage} from "../../components/Input/Input.style";

import {
    ContentContainer,
    FromToTime,
    Input,
    Label, Notification,
    PInput,
    PopupCity,
    PrimaryButton,
    SecondaryButton
} from "../../components";

import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import {startLoading, stopLoading} from "../../features/request/requestSlice";
import {BasketButton, Pictures} from "../edit-company/EditCompany.style";

import {BE_API, URL} from "../../utils/config";
import {fetchData} from "../../utils/fetch";
import {company_validation} from "../../utils/validation";
import {LOCAL_STORAGE_KEY, LocalStorage, getScheduleAsString, isScheduleValid} from "../../utils/utils";

import {initialValues} from './utils';

const CompanySchema = Yup.object().shape(company_validation);

const AddCompany = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    const dispatch = useDispatch();

    const CUSTOMER = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER)
    const [pictures, setPictures] = useState([]);
    const [isCompanySaved, setIsCompanySaved] = useState(false);
    const [requestError, setRequestError] = useState("");
    const [showCityPopup, setShowCityPopup] = useState(false);

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

        dispatch(startLoading())

        fetchData(BE_API.POST_COMPANY_CREATE(), reqObj)
            .then(res => {
                dispatch(stopLoading())
                setIsCompanySaved(true);
            })
            .catch(res => {
                setRequestError(res.status + " Error: " + res.body.errorMessage);
                dispatch(stopLoading())
            })
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
                {({values, setFieldValue, handleSubmit, handleChange, errors}) => (
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
                            <Label>Phone</Label>
                            <Input
                                withCleaner
                                name="phone"
                                value={values.phone}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('phone', '')}
                                errorMessage={errors.phone}
                            />
                            <Label>Work Schedule</Label>
                            <FromToTime checkboxName={'monIsChecked'} isChecked={values.monIsChecked} dayName={'ПН'}
                                        nameFrom={"monFrom"} valueFrom={values.monFrom} nameTo={"monTo"}
                                        valueTo={values.monTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'tueIsChecked'} isChecked={values.tueIsChecked} dayName={'ВТ'}
                                        nameFrom={"tueFrom"} valueFrom={values.tueFrom} nameTo={"tueTo"}
                                        valueTo={values.tueTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'wedIsChecked'} isChecked={values.wedIsChecked} dayName={'СР'}
                                        nameFrom={"wedFrom"} valueFrom={values.wedFrom} nameTo={"wedTo"}
                                        valueTo={values.wedTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'thuIsChecked'} isChecked={values.thuIsChecked} dayName={'ЧТ'}
                                        nameFrom={"thuFrom"} valueFrom={values.thuFrom} nameTo={"thuTo"}
                                        valueTo={values.thuTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'friIsChecked'} isChecked={values.friIsChecked} dayName={'ПТ'}
                                        nameFrom={"friFrom"} valueFrom={values.friFrom} nameTo={"friTo"}
                                        valueTo={values.friTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'satIsChecked'} isChecked={values.satIsChecked} dayName={'СБ'}
                                        nameFrom={"satFrom"} valueFrom={values.satFrom} nameTo={"satTo"}
                                        valueTo={values.satTo} handleChange={handleChange}/>
                            <FromToTime checkboxName={'sunIsChecked'} isChecked={values.sunIsChecked} dayName={'ВС'}
                                        nameFrom={"sunFrom"} valueFrom={values.sunFrom} nameTo={"sunTo"}
                                        valueTo={values.sunTo} handleChange={handleChange}/>
                            {isScheduleValid(values) || <WarningMessage>'Schedule is a required field'</WarningMessage>}
                        </ContentContainer>
                        <PrimaryButton type='submit' isWide>Save changes</PrimaryButton>
                        {showCityPopup && <PopupCity selectCity={selectCity(city => setFieldValue('city', city))}
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

export default AddCompany;
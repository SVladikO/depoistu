import React, {useState, useEffect,useMemo} from "react";
import {useParams} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";

import {Formik} from "formik";
import * as Yup from "yup";

import "swiper/css";
import "swiper/css/pagination";

import {Divider, InstitutionBasketButton, InstitutionPictures, Wrapper,} from "./AddCompany.style";

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
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {ReactComponent as LocationIcon} from "../../icons/map_point.svg";


import {BasketButton, Pictures} from "../edit-company/EditCompany.style";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {company_validation} from "../../utils/validation";
import {initSchedule} from "../../utils/utils";


const AddCompany = () => {
    const companyId = +useParams().companyId || 1;
    const CUSTOMER_COMPANIES = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const company = CUSTOMER_COMPANIES.find((c => c.ID === companyId));
    const [pictures, setPictures] = useState([]);

    const [city, setCity] = useState('');
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
                    name: '',
                    street: '',
                    monIsChecked: false,
                    monFrom: '',
                    monTo: '',
                    tueIsChecked: false,
                    tueFrom: '',
                    tueTo: '',
                    wedIsChecked: false,
                    wedFrom: '',
                    wedTo: '',
                    thuIsChecked: false,
                    thuFrom: '',
                    thuTo: '',
                    friIsChecked: false,
                    friFrom: '',
                    friTo: '',
                    satIsChecked: false,
                    satFrom: '',
                    satTo: '',
                    sunIsChecked: false,
                    sunFrom: '',
                    sunTo: '',
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
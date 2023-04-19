import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useParams} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import {Divider, BasketButton, Pictures, Wrapper,} from "./EditCompany.style";

import {ContentContainer, FromToTime, Input, Label, PrimaryButton, SecondaryButton} from "../../components";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";

import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";

let weekScheduleKipper = [];

const updateWeekScheduleKipper =  (dayName, fieldName, value) => {
    weekScheduleKipper.find(weekDay => weekDay.name === dayName)[fieldName] = value;
    console.log(weekScheduleKipper);
}

const EditCompany = () => {
    const companyId = +useParams().companyId;
    const CUSTOMER_COMPANIES = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const company = CUSTOMER_COMPANIES.find((c => c.ID === companyId));

    const [name, setName] = useState(company.NAME || '');
    const [city, setCity] = useState(company.CITY || '');
    const [street, setStreet] = useState(company.STREET || '');
    const [pictures, setPictures] = useState(company?.PHOTOS?.split(',') || []);

    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));

    const nameChangeHandler = useCallback(setName, [name]);
    const nameClearHandler = useCallback(() => setName(''), [name]);

    const cityChangeHandler = useCallback(setCity, [city]);
    const cityClearHandler = useCallback(() => setCity(''), [city]);

    const streetChangeHandler = useCallback(setStreet, [street]);
    const streetClearHandler = useCallback(() => setStreet(''), [street]);

    const [weekSchedule] = useState(initSchedule(company?.SCHEDULE));

    if (!weekScheduleKipper.length) {
        weekScheduleKipper = weekSchedule;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const companyPictures = useMemo(() => renderPictures(pictures, deleteCompanyImage), [pictures])

    const renderCompanyDetails = () => {
        return (
            <>
                <SecondaryButton isWide><RemoveIcon/> Delete company</SecondaryButton>
                {companyPictures}
                <ContentContainer>
                    <Label>Company Name</Label>
                    <Input
                        value={name}
                        withCleaner
                        changeHandler={nameChangeHandler}
                        clearHandler={nameClearHandler}
                    />
                    <Label>City</Label>
                    <Input
                        value={city}
                        withCleaner
                        changeHandler={cityChangeHandler}
                        clearHandler={cityClearHandler}
                    />
                    <Label>Street</Label>
                    <Input
                        value={street}
                        withCleaner
                        changeHandler={streetChangeHandler}
                        clearHandler={streetClearHandler}
                    />
                    <Label>Work Schedule</Label>
                    {weekSchedule.map(day => <FromToTime key={day.name} day={day} updateWeekScheduleKipper={updateWeekScheduleKipper} />)}
                </ContentContainer>
            </>
        )
    }

    return (
        <Wrapper>
            {renderCompanyDetails()}
            <PrimaryButton isWide>Save changes</PrimaryButton>
        </Wrapper>
    );
};

function initSchedule(schedule) {
    const times = schedule.split(',')?.map(el => el.trim());

    return ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
        .map((name, index) => {
            const [from, to] = times[index]?.split('-');

            return {isChecked: !!times[index], from, to, name}
        })
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
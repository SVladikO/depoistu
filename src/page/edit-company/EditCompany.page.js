import "swiper/css";
import "swiper/css/pagination";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Divider, InstitutionBasketButton, InstitutionPictures, Wrapper,} from "./EditCompany.style";

import {ContentContainer, FromToTime, Input, Label, PrimaryButton, SecondaryButton} from "../../components";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

const EditCompany = () => {
    const companyId = +useParams().companyId;
    const CUSTOMER_COMPANIES = LocalStorage.get(LOCAL_STORAGE_KEY.CUSTOMER_COMPANIES);
    const company = CUSTOMER_COMPANIES.find((c => c.ID === companyId));
    const [name, setName] = useState(company.NAME || '');
    const [city, setCity] = useState(company.CITY || '');
    const [street, setStreet] = useState(company.STREET || '');
    const [pictures, setPictures] = useState(company?.PHOTOS?.split(',') || []);
    const [schedule, setSchedule] = useState(company?.SCHEDULE?.split(',') || []);
    const [isChecked, setIsChecked] = useState(false);


    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));
    const cleanCityInput = () => setCity('');
    const onCityInput = e => setCity(e.target.value);
    const onStreetInput = e => setStreet(e.target.value);
    const clearStreetInput = () => setStreet('');



    function makeSchedule(schedule){
        let days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
        return schedule.map((el,i) => ({
            id: `FromTo${i + 1}`,
            name:days[i],
            from: schedule[i].split('-')[0],
            to: schedule[i].split('-')[1],
            isChecked: !(!schedule[i].split('-')[0] || schedule[i].split('-')[1] === undefined || '')
        }))
    }

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const weekDays = makeSchedule(schedule);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const renderCompanyDetails = () => {
        return (
            <>
                <SecondaryButton isWide><RemoveIcon/> Delete company</SecondaryButton>
                <InstitutionPictures>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={2}
                        spaceBetween={10}
                    >
                        {
                            pictures.map((el, index) => (
                                <SwiperSlide key={Math.random()}>
                                    <img src={el} alt=''/>
                                    <InstitutionBasketButton onClick={() => deleteCompanyImage(index)}>
                                        <DeleteBasketIcon/>
                                    </InstitutionBasketButton>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </InstitutionPictures>
                <SecondaryButton isWide>+Photo</SecondaryButton>
                <Divider/>
                <ContentContainer>
                    <Label>Company Name</Label>
                    <Input
                        withCleaner
                        value={name}
                        placeholder="Name"
                        changeHandler={cleanCityInput}
                        onChange={onCityInput}
                    />
                    <Label>City</Label>
                    <Input
                        withCleaner
                        value={city}
                        placeholder="City"
                        onChange={onCityInput}
                        changeHandler={cleanCityInput}
                    />
                    <Label>Street</Label>
                    <Input
                        withCleaner
                        value={street}
                        placeholder="Street"
                        onChange={onStreetInput}
                        changeHandler={clearStreetInput}
                    />
                    <Label>Work Schedule</Label>
                    {weekDays.map((day,i) =>
                        <FromToTime
                            key={day.id}
                            isChecked={day.isChecked}
                            id={day.id}
                            weekDay={day.name}
                            from={day.from}
                            to={day.to}
                            handlerChange={checkHandler}
                        />)}

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

export default EditCompany;
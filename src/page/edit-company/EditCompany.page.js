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

    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));
    const cleanCityInput = () => setCity('');
    const onCityInput = e => setCity(e.target.value);
    const onStreetInput = e => setStreet(e.target.value);
    const clearStreetInput = () => setStreet('');

    const weekDays = [
        {id: 'FromTo1', name: 'Sun', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo2', name: 'Mon', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo3', name: 'Tue', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo4', name: 'Wed', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo5', name: 'Thu', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo6', name: 'Fri', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo7', name: 'Sat', isChecked: false, from: '00:00', to: '00:00'},
    ];

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
                    {weekDays.map(day => <FromToTime key={day.id} id={day.id} weekDay={day.name} from={day.from} to={day.to} />)}

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
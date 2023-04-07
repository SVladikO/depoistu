import "swiper/css";
import "swiper/css/pagination";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {Divider, InstitutionBasketButton, InstitutionPictures, Wrapper,} from "./EditCompany.style";

import {ContentContainer, FromToTime, Input, PrimaryWideButton} from "../../components";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {BE_API} from "../../utils/config";
import {fetchData} from "../../utils/fetch";

const EditCompany = () => {
    const {companyId} = useParams();
    const [company, setCompany] = useState({});
    const [name, setName] = useState(company.NAME || '');
    const [city, setCity] = useState(company.CITY || '');
    const [street, setStreet] = useState(company.STREET || '');
    const [pictures, setPictures] = useState(company?.PHOTOS?.split(',') || []);
    const url = BE_API.GET_COMPANY_BY_COMPANY_ID(companyId);

    useEffect(() => {
        //TODO: SHOW WARNING WRONG PARAM
        companyId && fetchData(url)
            .then(res => {
                const resCompany = res[0];
                setCompany(resCompany);
                setName(resCompany.NAME || '');
                setCity(resCompany.CITY || '');
                setStreet(resCompany.STREET || '');
                setPictures(resCompany?.PHOTOS?.split(',') || []);
        })
    }, [url])

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
    ]

    const renderCompanyDetails = () => {
        return (
            <>
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
                <PrimaryWideButton>+Photo</PrimaryWideButton>
                <Divider/>
                <ContentContainer>
                    <Input
                        withCleaner
                        value={name}
                        placeholder="Name"
                        changeHandler={cleanCityInput}
                        onChange={onCityInput}
                    />
                    <Input
                        withCleaner
                        value={city}
                        placeholder="City"
                        onChange={onCityInput}
                        changeHandler={cleanCityInput}
                    />
                    <Input
                        withCleaner
                        value={street}
                        placeholder="Street"
                        onChange={onStreetInput}
                        changeHandler={clearStreetInput}
                    />

                    {weekDays.map(day => <FromToTime key={day.id} id={day.id} weekDay={day.name} from={day.from} to={day.to} />)}

                </ContentContainer>
            </>
        )
    }

    return (
        <Wrapper>
            {renderCompanyDetails()}
            <PrimaryWideButton>Save changes</PrimaryWideButton>
        </Wrapper>
    );
};

export default EditCompany;
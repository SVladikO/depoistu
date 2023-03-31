import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useParams} from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import {ContentContainer, Input, PrimaryWideButton} from "../../components";
import {
    Wrapper,
    InstitutionPictures,
    InstitutionBasketButton,
    Divider,
} from "./EditCompany.style";
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
    const url = BE_API.GET_COMPANY_BY_ID(companyId);

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
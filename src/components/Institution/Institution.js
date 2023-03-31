import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import {Wrapper,ImageSection, Name, Address, Content} from "./Institution.style";

const Institution = (props) => {

    const {PHOTOS, NAME, CITY, STREET} = props.company || {};
    return (
        <Wrapper>
            <ImageSection>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {PHOTOS && PHOTOS.split(', ').map((src,i) => <SwiperSlide key={i}><img src={src} alt="#"/></SwiperSlide>)}
                </Swiper>
            </ImageSection>
            <Content>
                <Name>{NAME}</Name>
                <Address>{CITY}, {STREET}</Address>
            </Content>
        </Wrapper>
    );
};

export default Institution;


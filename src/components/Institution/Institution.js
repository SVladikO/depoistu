import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Wrapper,ImageSection, Name, Address, Content} from "./Institution.style";

const Institution = (props) => {
    const {images, name, city, street} = props.company;

    return (
        <Wrapper>
            <ImageSection>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {images.map((src,i) => <SwiperSlide key={i}><img src={src} alt="#"/></SwiperSlide>)}
                </Swiper>
            </ImageSection>
            <Content>
                <Name>{name}</Name>
                <Address>{city}, {street}</Address>
            </Content>
        </Wrapper>
    );
};

export default Institution;


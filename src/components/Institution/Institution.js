import React from 'react';
import {Wrapper,ImageSection, Dots, Name, Address, Content} from "./Institution.style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const Institution = (props) => {
    const {images, name, address} = props.company;
    return (
        <Wrapper>
            <ImageSection>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {images.map((el,i) => <SwiperSlide key={i}><img src={el} alt="#"/></SwiperSlide>)}
                </Swiper>
            </ImageSection>
            <Content>
                <Name>{name}</Name>
                <Address>{address}</Address>
            </Content>
        </Wrapper>
    );
};

export default Institution;


import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import {schedule} from "../../utils/utils";
import "swiper/css";
import "swiper/css/pagination";
import {Wrapper,ImageSection, Name, Address, Content, CompanyInfo, Schedule} from "./Company.style";

const Company = (props) => {

    if (!props.company) {
        return ;
    }
    const {PHOTOS, NAME, CITY, STREET, SCHEDULE} = props.company;

    function renderSchedule() {
        if (!SCHEDULE || !SCHEDULE.length) {
            return
        }
        const obj = schedule(SCHEDULE);
        if(!Object.keys(obj).length) {
            return ;
        }
        return Object.keys(obj)?.map((key, i) => {
            return (
                <div key={i}>
                    <div>{obj[key]}</div>
                    <div>{key}</div>
                </div>
            )
        })
    }

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
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    <Address>{CITY}, {STREET}</Address>
                </CompanyInfo>
                <Schedule>
                    {renderSchedule()}
                </Schedule>
            </Content>
        </Wrapper>
    );
};

export default Company;


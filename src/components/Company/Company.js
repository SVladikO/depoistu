import React from 'react';
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {
    Wrapper,
    ImageSection,
    Name,
    Address,
    Content,
    CompanyInfo,
    ScheduleContainer,
    ScheduleWrapper
} from "./Company.style";

const Company = (props) => {

    if (!props.company) {
        return;
    }
    const {PHOTOS, NAME, CITY, STREET, SCHEDULE} = props.company;

    return (
        <Wrapper>
            <ImageSection>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                >
                    {PHOTOS && PHOTOS.split(', ')
                        .map((src, i) =>
                            <SwiperSlide key={i}>
                                <img src={src} alt="#"/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </ImageSection>
            <Content>
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    <Address>{CITY}, {STREET}</Address>
                </CompanyInfo>
                <ScheduleWrapper>{renderSchedule(SCHEDULE)}</ScheduleWrapper>
            </Content>
            {props.children}
        </Wrapper>
    );
};

function renderSchedule(SCHEDULE) {
    if (!SCHEDULE || !SCHEDULE.length) {
        return;
    }

    const scheduleAsObject = getScheduleAsObject(SCHEDULE);

    if (!Object.keys(scheduleAsObject).length) {
        return;
    }

    return Object.keys(scheduleAsObject)?.map((key, i) => {
        return (
            <ScheduleContainer key={i}>
                <div>{scheduleAsObject[key]}</div>
                <div>{key}</div>
            </ScheduleContainer>
        )
    })
}

export function getScheduleAsObject(schedule) {
    const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

    return schedule
        .split(',')
        .map(el => el.trim())
        .reduce((accum, fromTo, currentIndex) => {
            if (fromTo) {
                accum[fromTo] = (accum[fromTo] ? accum[fromTo] + ', ' : '') + weekDayNames[currentIndex];
            }
            return accum;
        }, {});
}


export default Company;
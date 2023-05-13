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
    ScheduleWrapper,
    Schedule,
    Open,
    Closes,
    EditBar
} from "./Company.style";
import {Link} from "react-router-dom";
import {ROUTER} from "../../utils/config";
import {PrimaryButton} from "../Button/Button.style";
import {ReactComponent as EditIcon} from "../../icons/edit.svg";


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
                    <ScheduleWrapper>{renderSchedule(SCHEDULE)[0]}</ScheduleWrapper>
                </CompanyInfo>
            </Content>
            <EditBar>
                <Link to={ROUTER.EDIT_COMPANY.URL}>
                    <PrimaryButton><EditIcon/>Company</PrimaryButton>
                </Link>
                <Link to={ROUTER.EDIT_MENU.URL}>
                    <PrimaryButton><EditIcon/>Menu</PrimaryButton>
                </Link>
            </EditBar>
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
        const open = `${key.slice(0,5)}`;
        const closes = `${key.slice(6)}`
        return (
            <ScheduleContainer key={i}>
                <Schedule>
                    <Open>Open</Open>
                    <Closes>Closes <span>{closes}</span></Closes>
                </Schedule>
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


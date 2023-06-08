import React, {useState} from 'react';
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {ReactComponent as RightAnchor} from "../../icons/right-anchor.svg";

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
    Phone,
    DetailedLink,
    ScheduleContent, Location,
    Day
} from "./Company.style";

import {getScheduleAsObject} from "../../utils/company";
import {COLOR} from "../../utils/theme";

const ScheduleDetails = ({schedule}) => {
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (!schedule || !schedule.length) {
        return;
    }

    const scheduleAsObject = getScheduleAsObject(schedule);

    if (!Object.keys(scheduleAsObject).length) {
        return;
    }

    if (isWeekScheduleVisible) {
        const days = Object.keys(scheduleAsObject);
        return (
            <ScheduleContent>
                {
                    Object.entries(scheduleAsObject)?.map((key, i) => {
                        const time = `${key[1].split('-').join(' ')}`;
                        const from = time.split(' ')[0];
                        const to = time.split(' ')[1];
                        const day = key[0];
                        const getCurrentDay = new Date().getDay() - 1;
                        const condition = days.indexOf(day) === getCurrentDay;

                        return (
                            <ScheduleWrapper key={i.toString()}>
                                <ScheduleContainer>
                                    <div>
                                        <Day condition={condition}>{day}</Day>
                                        <div>{from}</div>
                                        <div>{to}</div>
                                    </div>
                                </ScheduleContainer>
                            </ScheduleWrapper>
                        )
                    })
                }
            </ScheduleContent>
        )

    }

    return (
        <DetailedLink onClick={() => setIsWeekScheduleVisible(true)}>
            Show schedule
        </DetailedLink>
    )
}


const Company = (props) => {

    if (!props.company) {
        return;
    }

    const {PHOTOS, NAME, CITY, STREET, SCHEDULE} = props.company;

    const renderLocation = () => {
        if (props.withMoreInfo) {
            return (
                <Location>
                    <Address>{CITY}, {STREET}</Address>
                    <RightAnchor/>
                </Location>
            );
        }

        return (
            <Location>
                <Address>{CITY}, {STREET}</Address>
            </Location>
        )
    }

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
                    {renderLocation()}
                    <Schedule>
                        <Open>Open</Open>
                        <Closes>Closes<span>22:00</span></Closes>
                    </Schedule>
                    {props.withMoreInfo && <Phone>80978432032</Phone>}
                    {props.withMoreInfo && <ScheduleDetails schedule={SCHEDULE}/>}
                </CompanyInfo>
                {props.children}
            </Content>
        </Wrapper>
    );
};


export default Company;
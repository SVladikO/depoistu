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
    ScheduleContent, Location
} from "./Company.style";

import {getScheduleAsObject} from "../../utils/company";

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
        return (
            <ScheduleContent>
                {
                    Object.entries(scheduleAsObject)?.map((key, i) => {
                        const time = `${key[1].split('-').join(' ')}`;
                        const from = time.split(' ')[0];
                        const to = time.split(' ')[1];

                        return (
                            <ScheduleWrapper key={i.toString()}>
                                <ScheduleContainer>
                                    <div>
                                        <div>{key[0]}</div>
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

    function getClosedTime () {
        const scheduleAsObject = getScheduleAsObject(SCHEDULE);
        const time = Object.values(scheduleAsObject);
        let currentDayIndex = new Date().getDay();

        if(currentDayIndex === 0){
            currentDayIndex = 7;
        }

        return time.map((el,i) =>  i === currentDayIndex ? el.split('-').pop() : null)
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
                        <Closes>Closes<span>{getClosedTime()}</span></Closes>
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
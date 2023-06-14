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
    Day, CloseStatus
} from "./Company.style";

import {ScheduleParser} from "../../utils/company";

const ScheduleDetails = ({scheduleAsArray}) => {
    const [isWeekScheduleVisible, setIsWeekScheduleVisible] = useState(false);

    if (isWeekScheduleVisible) {
        return (
            <ScheduleContent>
                {
                    scheduleAsArray?.map((day, i) => {
                        const {dayName, from,to} = day;

                        return (
                            <ScheduleWrapper key={i.toString()}>
                                <ScheduleContainer>
                                    <div>
                                        <Day isToday={ScheduleParser.isToday(i)}>{dayName}</Day>
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
    const scheduleParser = new ScheduleParser(SCHEDULE);

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
                        {scheduleParser.checkIsCompanyOpenNow()
                            ? <>
                                <Open>Open</Open>
                                <Closes>Closes<span>{scheduleParser.getCurrentDayAsObject().to}</span></Closes>
                            </>
                            : <CloseStatus>Close</CloseStatus>
                        }
                    </Schedule>
                    {props.withMoreInfo && <Phone>80978432032</Phone>}
                    {props.withMoreInfo && SCHEDULE && SCHEDULE.length && <ScheduleDetails scheduleAsArray={scheduleParser.getScheduleAsArray()}/>}
                </CompanyInfo>
                {props.children}
            </Content>
        </Wrapper>
    );
};


export default Company;
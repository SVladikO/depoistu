import React from 'react';
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {ReactComponent as LocationIcon} from "../../icons/location.svg";
import {ReactComponent as PhoneIcon} from "../../icons/phone.svg";
import {
    Wrapper,
    ImageSection,
    Name,
    Address,
    Content,
    CompanyInfo,
    Schedule,
    OpenStatus,
    Closes,
    LocationWrapper,
    CloseStatus
} from "./Company.style";
import {ThirdButton} from "../Button/Button.style";

import {parseSchedule} from "../../utils/company";
import ScheduleDetails from "../WeekScheduleOutput/WeekScheduleOutput";

const Company = (props) => {

    if (!props.company) {
        return;
    }

    const {PHOTOS, NAME, CITY, STREET, PHONE, SCHEDULE} = props.company
    const schedule = parseSchedule(SCHEDULE);

    const renderLocation = () => {
        if (props.withMoreInfo) {
            return <ThirdButton><LocationIcon/>{CITY}, {STREET}</ThirdButton>
        }

        return <LocationWrapper>{CITY}, {STREET}</LocationWrapper>;
    }

    const renderImages = () => (
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
    );

    const renderDaySchedule = () => (
        <Schedule>
            {schedule.isCompanyOpenNow
                ? <>
                    <OpenStatus>Open</OpenStatus>
                    <Closes>Closes<span>{schedule.currentDay.to}</span></Closes>
                </>
                : <CloseStatus>Close</CloseStatus>
            }
        </Schedule>
    )

    return (
        <Wrapper>
            {renderImages()}
            <Content>
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    {renderDaySchedule()}
                    {renderLocation()}
                    {props.withMoreInfo && <ThirdButton><PhoneIcon/>{PHONE}</ThirdButton>}
                    {props.withMoreInfo && SCHEDULE && SCHEDULE.length && <ScheduleDetails scheduleAsArray={schedule.workDays}/>}
                </CompanyInfo>
                {props.children}
            </Content>
        </Wrapper>
    );
};


export default Company;
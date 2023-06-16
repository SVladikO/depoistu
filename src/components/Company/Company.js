import React from 'react';
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
    Schedule,
    OpenStatus,
    Closes,
    Phone,
    Location,
    CloseStatus
} from "./Company.style";

import {parseSchedule} from "../../utils/company";
import ScheduleDetails from "../Schedule/Schedule";

const Company = (props) => {

    if (!props.company) {
        return;
    }

    const {PHOTOS, NAME, CITY, STREET, PHONE, SCHEDULE} = props.company
    const schedule = parseSchedule(SCHEDULE);

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
                        {schedule.isCompanyOpenNow
                            ? <>
                                <OpenStatus>Open</OpenStatus>
                                <Closes>Closes<span>{schedule.currentDay.to}</span></Closes>
                            </>
                            : <CloseStatus>Close</CloseStatus>
                        }
                    </Schedule>
                    {props.withMoreInfo && <Phone>{PHONE}</Phone>}
                    {props.withMoreInfo && SCHEDULE && SCHEDULE.length && <ScheduleDetails scheduleAsArray={schedule.workDays}/>}
                </CompanyInfo>
                {props.children}
            </Content>
        </Wrapper>
    );
};


export default Company;
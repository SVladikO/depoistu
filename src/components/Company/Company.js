import React from 'react';
import {Link} from "react-router-dom";
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";
import {ReactComponent as PhoneIcon} from "../../assets/icons/phone.svg";
import {
    Wrapper,
    ImageSection,
    Name,
    Content,
    CompanyInfo,
    Schedule,
    OpenStatus,
    Closes,
    LocationWrapper,
    CloseStatus
} from "./Company.style";

import {parseSchedule} from "../../utils/company";
import ScheduleDetails from "../WeekScheduleOutput/WeekScheduleOutput";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";
import {translate, TRANSLATION as TR, truncate} from "../../utils/translation";
import {ThirdButton} from "../Buttons/ThirdButton";

const Company = (props) => {

    if (!props.company) {
        return null;
    }

    const {PHOTOS, NAME, CITY_ID, STREET, PHONE1, PHONE2, PHONE3, SCHEDULE} = props.company
    const schedule = parseSchedule(SCHEDULE);

    const CompanyLocationButton = () => {
        if (props.withMoreInfo) {
            const address = `,${STREET}, ${translate(CITY_TRANSLATION_IDS[CITY_ID])}`
            let addressUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`

            return (
                <Link to={addressUrl} target="_blank" rel="noopener">
                    <ThirdButton>
                        <LocationIcon />
                        {truncate(`${translate(CITY_TRANSLATION_IDS[CITY_ID])}, ${STREET}`, 28)}
                    </ThirdButton>
                </Link>
            )
        }

        return (
            <LocationWrapper>
            {translate(CITY_TRANSLATION_IDS[CITY_ID])}, {STREET}
        </LocationWrapper>
        );
    }

    const Images = () => (
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
                    <OpenStatus>{translate(TR.COMPONENTS.COMPANY.STATUS_OPEN)}</OpenStatus>
                    <Closes><span>{translate(TR.COMPONENTS.COMPANY.TILL)} {schedule.currentDay.to}</span></Closes>
                </>
                : <CloseStatus>{translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}</CloseStatus>
            }
        </Schedule>
    )

    return (
        <Wrapper>
            {/*<Images />*/}
            <Content>
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    {renderDaySchedule()}
                    <CompanyLocationButton />
                    {props.withMoreInfo && <a href={`tel:${PHONE1}`}><ThirdButton><PhoneIcon/>{PHONE1}</ThirdButton></a>}
                    {props.withMoreInfo && PHONE2 && <a href={`tel:${PHONE2}`}><ThirdButton><PhoneIcon/>{PHONE2}</ThirdButton></a>}
                    {props.withMoreInfo && PHONE3 && <a href={`tel:${PHONE3}`}><ThirdButton><PhoneIcon/>{PHONE3}</ThirdButton></a>}
                    {props.withMoreInfo && SCHEDULE && SCHEDULE.length && <ScheduleDetails scheduleAsArray={schedule.workDays}/>}
                </CompanyInfo>
                {props.children}
            </Content>
        </Wrapper>
    );
};


export default Company;
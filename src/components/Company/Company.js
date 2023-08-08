import React from 'react';
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
import {ThirdButton} from "../Button/Button.style";

import {parseSchedule} from "../../utils/company";
import ScheduleDetails from "../WeekScheduleOutput/WeekScheduleOutput";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";
import {translate, TRANSLATION as TR} from "../../utils/translation";

const Company = (props) => {

    if (!props.company) {
        return;
    }

    const {PHOTOS, NAME, CITY_ID, STREET, PHONE1, PHONE2, PHONE3, SCHEDULE} = props.company
    const schedule = parseSchedule(SCHEDULE);

    const redirectToGoogleMaps = (CITY_ID, STREET) => {
        const address = `,${STREET}, ${translate(CITY_TRANSLATION_IDS[CITY_ID])}`
        const encodedAddress = encodeURIComponent(address);
        window.location.href = `https://www.google.com/maps?q=${encodedAddress}`;
    };


    const renderLocation = () => {
        if (props.withMoreInfo) {
            return <ThirdButton onClick={() => redirectToGoogleMaps(CITY_ID, STREET)}><LocationIcon/>{translate(CITY_TRANSLATION_IDS[CITY_ID])}, {STREET}</ThirdButton>
        }

        return <LocationWrapper>{translate(CITY_TRANSLATION_IDS[CITY_ID])}, {STREET}</LocationWrapper>;
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
                    <OpenStatus>{translate(TR.COMPONENTS.COMPANY.STATUS_OPEN)}</OpenStatus>
                    <Closes><span>{translate(TR.COMPONENTS.COMPANY.TILL)} {schedule.currentDay.to}</span></Closes>
                </>
                : <CloseStatus>{translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}</CloseStatus>
            }
        </Schedule>
    )

    return (
        <Wrapper>
            {/*{renderImages()}*/}
            <Content>
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    {renderDaySchedule()}
                    {renderLocation()}
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
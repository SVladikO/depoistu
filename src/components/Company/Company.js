import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";
import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";
import {ReactComponent as TimeIcon} from "assets/icons/time.svg";
import {ReactComponent as Heart1Icon} from "assets/icons/heart1.svg";
import {ReactComponent as Heart2Icon} from "assets/icons/heart2.svg";


import {
    Wrapper,
    ImageSection,
    Name,
    Content,
    CompanyInfo,
    Schedule,
    OpenStatus,
    FirstRow,
    Closes,
    LocationWrapper,
    CloseStatus
} from "./Company.style";

import {ThirdButton} from "components/Buttons/ThirdButton";
import ScheduleDetails from "components/WeekScheduleOutput/WeekScheduleOutput";

import {parseSchedule} from "utils/company";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import {translate, TRANSLATION as TR, truncate} from "utils/translation";

const Company = ({company, withMoreInfo, isLikedByCurrentCustomer = false, children, clickHandler}) => {

    const customer = useSelector(state => state.customer.value);

    if (!company) {
        return null;
    }

    const parsedSchedule = parseSchedule(company.schedule);

    const CompanyLocationButton = () => {
        if (withMoreInfo) {
            const address = `,${company.street}, ${translate(CITY_TRANSLATION_IDS[company.cityId])}`
            let addressUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`

            return (
                <Link to={addressUrl} target="_blank" rel="noopener">
                    <ThirdButton>
                        <LocationIcon/>
                        {truncate(`${translate(CITY_TRANSLATION_IDS[company.cityId])}, ${company.street}`, 28)}
                    </ThirdButton>
                </Link>
            )
        }

        return (
            <LocationWrapper>
                <LocationIcon/>{translate(CITY_TRANSLATION_IDS[company.cityId])}, {company.street}
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
                {company.photos && company.photos.split(', ')
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
            {parsedSchedule.isCompanyOpenNow
                ? <>
                    <OpenStatus><TimeIcon/>{translate(TR.COMPONENTS.COMPANY.STATUS_OPEN)}</OpenStatus>
                    <Closes><span>{translate(TR.COMPONENTS.COMPANY.TILL)} {parsedSchedule.currentDay.to}</span></Closes>
                </>
                : <CloseStatus><TimeIcon/>{translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}</CloseStatus>
            }
        </Schedule>
    )

    return (
        <Wrapper withMoreInfo={withMoreInfo} onClick={clickHandler}>
            {/*<Images />*/}
            <Content>
                <CompanyInfo>
                    <FirstRow>
                        <Name>{company.name}</Name>
                        {customer && isLikedByCurrentCustomer ? <Heart2Icon/> : <Heart1Icon/> }

                    </FirstRow>
                    {renderDaySchedule()}
                    <CompanyLocationButton/>
                    {withMoreInfo &&
                        <a href={`tel:${company.phone1}`}><ThirdButton><PhoneIcon/>{company.phone1}</ThirdButton></a>}
                    {withMoreInfo && company.phone2 &&
                        <a href={`tel:${company.phone2}`}><ThirdButton><PhoneIcon/>{company.phone2}</ThirdButton></a>}
                    {withMoreInfo && company.phone3 &&
                        <a href={`tel:${company.phone3}`}><ThirdButton><PhoneIcon/>{company.phone3}</ThirdButton></a>}
                    {withMoreInfo && company.schedule && company.schedule.length &&
                        <ScheduleDetails scheduleAsArray={parsedSchedule.workDays}/>}
                </CompanyInfo>
                {children}
            </Content>
        </Wrapper>
    );
};


export default Company;
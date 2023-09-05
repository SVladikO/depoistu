import React from 'react';
import {Link} from "react-router-dom";
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {ReactComponent as LocationIcon} from "../../assets/icons/location.svg";
import {ReactComponent as PhoneIcon} from "../../assets/icons/phone.svg";
import {ReactComponent as TimeIcon} from "../../assets/icons/time.svg";
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

const Company = ({company, withMoreInfo, children}) => {
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
                        <LocationIcon />
                        {truncate(`${translate(CITY_TRANSLATION_IDS[company.cityId])}, ${company.street}`, 28)}
                    </ThirdButton>
                </Link>
            )
        }

        return (
            <LocationWrapper>
            {translate(CITY_TRANSLATION_IDS[company.cityId])}, {company.street}
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
                    <OpenStatus>{translate(TR.COMPONENTS.COMPANY.STATUS_OPEN)}</OpenStatus>
                    <Closes><TimeIcon/><span>{translate(TR.COMPONENTS.COMPANY.TILL)} {parsedSchedule.currentDay.to}</span></Closes>
                </>
                : <CloseStatus><TimeIcon/>{translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}</CloseStatus>
            }
        </Schedule>
    )

    return (
        <Wrapper>
            {/*<Images />*/}
            <Content>
                <CompanyInfo>
                    <Name>{company.name}</Name>
                    {renderDaySchedule()}
                    <CompanyLocationButton />
                    {withMoreInfo && <a href={`tel:${company.phone1}`}><ThirdButton><PhoneIcon/>{company.phone1}</ThirdButton></a>}
                    {withMoreInfo && company.phone2 && <a href={`tel:${company.phone2}`}><ThirdButton><PhoneIcon/>{company.phone2}</ThirdButton></a>}
                    {withMoreInfo && company.phone3 && <a href={`tel:${company.phone3}`}><ThirdButton><PhoneIcon/>{company.phone3}</ThirdButton></a>}
                    {withMoreInfo && company.schedule && company.schedule.length && <ScheduleDetails scheduleAsArray={parsedSchedule.workDays}/>}
                </CompanyInfo>
                {children}
            </Content>
        </Wrapper>
    );
};


export default Company;
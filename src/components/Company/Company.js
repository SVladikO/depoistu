import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "swiper/css";
import "swiper/css/pagination";

import {ReactComponent as LocationIcon} from "assets/icons/location.svg";
import {ReactComponent as TimeIcon} from "assets/icons/time.svg";
import {ReactComponent as PhoneIcon} from "assets/icons/phone.svg";
import {ReactComponent as Heart1Icon} from "assets/icons/heart1.svg";
import {ReactComponent as Heart2Icon} from "assets/icons/heart2.svg";
import defaultCompanyImg from 'assets/images/default/default_company.webp';

import {
    Wrapper, Name, Content, CompanyInfo, Schedule, OpenStatus, FirstRow, Closes, LocationWrapper,
} from "./Company.style";

import {ThirdButton, ScheduleDetails, SwiperWrapper} from "components";

import {
    addToFavoriteCompanies,
    deleteFromFavoriteCompanies
} from "features/favorite-company/favoriteComapnySlice";

import {errorHandler} from "utils/management";
import {parseSchedule} from "utils/company";
import {BE_API, fetchData} from "utils/fetch";
import {CITY_TRANSLATION_IDS} from "utils/cities";
import {translate, TRANSLATION as TR, truncate} from "utils/translation";
import ImageUrlFormatter from "../../utils/image.utils";

const Company = ({company, withMoreInfo, children, clickHandler}) => {

    const dispatch = useDispatch();

    const customer = useSelector(state => state.customer.value);
    const favotireCompanies = useSelector(state => state.favoriteCompany.value);

    const isLikedByCurrentCustomer = favotireCompanies?.find(fc => fc.id == company.id)

    if (!company) {
        return null;
    }

    const parsedSchedule = parseSchedule(company.schedule);

    const renderCityStreet = () => {
        if (withMoreInfo) {
            const address = `,${company.street}, ${translate(CITY_TRANSLATION_IDS[company.cityId])}`
            let addressUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`

            return (<Link to={addressUrl} target="_blank" rel="noopener">
                <ThirdButton>
                    <LocationIcon className="location_icon"/>
                    {truncate(`${translate(CITY_TRANSLATION_IDS[company.cityId])}, ${company.street}`, 40)}
                </ThirdButton>
            </Link>)
        }

        return (<LocationWrapper>
            <LocationIcon/>{translate(CITY_TRANSLATION_IDS[company.cityId])}, {company.street}
        </LocationWrapper>);
    }

    const slides =
        !company.photos?.length
            ? <LazyLoadImage src={ImageUrlFormatter.formatForCompany(defaultCompanyImg)} width={'100%'}/>
            : (
                <SwiperWrapper
                    slides={
                        company.photos
                            .map(src => <LazyLoadImage src={ImageUrlFormatter.formatForCompany(src)} alt="#"/>)
                    }
                />
            );

    const renderDaySchedule = () => (
        <Schedule>
            <OpenStatus>
                <TimeIcon className="time_icon"/>
                {parsedSchedule.isCompanyOpenNow ? translate(TR.COMPONENTS.COMPANY.STATUS_OPEN) : translate(TR.COMPONENTS.COMPANY.STATUS_CLOSE)}
            </OpenStatus>
            {parsedSchedule.isCompanyOpenNow &&
                <Closes>{translate(TR.COMPONENTS.COMPANY.TILL)} {parsedSchedule.currentDay.to}</Closes>}
        </Schedule>
    )

    const renderPhone = phone => withMoreInfo && phone && (
        <a href={`tel:${phone}`}>
            <ThirdButton>
                <PhoneIcon className="phone_icon"/>
                {phone}
            </ThirdButton>
        </a>
    )

    const renderPhones = () => (<>
        {renderPhone(company.phone1)}
        {renderPhone(company.phone2)}
        {renderPhone(company.phone3)}
    </>)

    const likeCompany = e => {
        e.stopPropagation();
        dispatch(addToFavoriteCompanies(company))
        fetchData(BE_API.FAVORITE_COMPANY.ADD(), {company_id: company.id})
            .catch(errorHandler)
    }

    const unlikeCompany = e => {
        e.stopPropagation();
        dispatch(deleteFromFavoriteCompanies(company))
        fetchData(BE_API.FAVORITE_COMPANY.ADD(), {company_id: company.id, method: 'delete'})
            .catch(errorHandler)
    }

    return (<Wrapper withMoreInfo={withMoreInfo} onClick={clickHandler}>
        {slides}
        <Content>
            <CompanyInfo>
                <FirstRow>
                    <Name>{company.name}</Name>
                    {customer
                        ? isLikedByCurrentCustomer
                            ? <Heart2Icon className="like_company_icon" onClick={unlikeCompany}/>
                            : <Heart1Icon className="like_company_icon" onClick={likeCompany}/>
                        : null}

                </FirstRow>
                {renderCityStreet()}
                {renderDaySchedule()}
                {renderPhones()}
                {withMoreInfo && company.schedule && company.schedule.length &&
                    <ScheduleDetails scheduleAsArray={parsedSchedule.workDays}/>}
            </CompanyInfo>
            {children}
        </Content>
    </Wrapper>);
};


export default Company;
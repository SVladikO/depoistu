import React from 'react';
import {Wrapper, LinkItem, LocationInfo} from './Footer.style';
import {URL} from "../../utils/config";
import {useLocalStorage} from "../../utils/hook";
import {LOCAL_STORAGE_KEY} from "../../utils/localStorage";
import {translate, TRANSLATION as TR} from "../../utils/translation";
import {CITY_TRANSLATION_IDS} from "../../utils/cities";

const Footer = () => {
    const [selectedCityId, setSelectedCity] = useLocalStorage(LOCAL_STORAGE_KEY.COMPANY_SEARCH_SELECTED_CITY_ID, '');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    let date = new Date();
    let dateFormat = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    const formatDate = (dateFormat) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
    };
    console.log(selectedCityId)
    return (
        <Wrapper>
            <LinkItem to={URL.CUSTOMER_COMPANIES}>{translate(TR.PAGE.SETTINGS.GROUP_TITLE.FOR_BUSINESS)}</LinkItem>
            <LinkItem to={URL.ABOUT_US}>{translate(TR.PAGE.SETTINGS.MENU_ROW.ABOUT_US)}</LinkItem>
            <LinkItem to={URL.OUR_TEAM}>{translate(TR.PAGE.OUR_TEAM.TOP_TITLE)}</LinkItem>
            <LinkItem onClick={scrollToTop}>{translate(TR.PAGE.FOOTER.BACK_TO_TOP_BUTTON)}</LinkItem>
            <LinkItem to={'https://depoistu-develop.onrender.com/'}>depoistu.support@gmail.com</LinkItem>
            <LocationInfo>{formatDate(dateFormat)}  {translate(CITY_TRANSLATION_IDS[selectedCityId])}</LocationInfo>
        </Wrapper>
    );
};

export default Footer;
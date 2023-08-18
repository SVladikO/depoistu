import React, {useState, useEffect} from 'react';
import {Wrapper, LinkItem, LocationInfo} from './Footer.style';
import {URL} from "../../utils/config";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Footer = () => {
    const apiKey = '';
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

    const [cityName, setCityName] = useState('');
    const [geolocationError, setGeolocationError] = useState(null);

    useEffect(() => {
        const fetchCityName = async (latitude, longitude) => {
            try {
                const apiKey = 'AIzaSyAJhvBkm0uoHJd0v8TKgKhb44km_8TdDQg';
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
                );
                const data = await response.json();

                if (data.results.length > 0) {
                    setCityName(data.results[0].formatted_address);
                }
            } catch (error) {
                console.error('Error fetching city name:', error);
            }
        };

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchCityName(latitude, longitude);
            }, (error) => {
                console.error('Error getting geolocation:', error);
            });
        }
    }, []);

    return (
        <Wrapper>
            <LinkItem to={URL.CUSTOMER_COMPANIES}>FOR BUSINESS</LinkItem>
            <LinkItem to={URL.ABOUT_US}>ABOUT US</LinkItem>
            <LinkItem to={URL.OUR_TEAM}>OUR TEAM</LinkItem>
            <LinkItem onClick={scrollToTop}>BACK TO TOP</LinkItem>
            <LinkItem to={'https://depoistu-develop.onrender.com/'}>depoistu.support@gmail.com</LinkItem>
            <LocationInfo>{formatDate(dateFormat)}</LocationInfo>
        </Wrapper>
    );
};

export default Footer;
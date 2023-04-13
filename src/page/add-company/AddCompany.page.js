import React, {useState, useEffect, useCallback} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Divider, InstitutionBasketButton, InstitutionPictures, Wrapper,} from "./AddCompany.style";

import {ContentContainer, FromToTime, Input, Label, PrimaryButton, SecondaryButton} from "../../components";
import {ReactComponent as DeleteBasketIcon} from "../../icons/delete_basket.svg";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

const AddCompany = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [pictures, setPictures] = useState([]);

    const nameChangeHandler = useCallback(setName, [name]);
    const nameClearHandler = useCallback(() => setName(''), [name]);

    const cityChangeHandler = useCallback(setCity, [name]);
    const cityClearHandler = useCallback(() => setCity(''), [name]);

    const streetChangeHandler = useCallback(setStreet, [name]);
    const streetClearHandler = useCallback(() => setStreet(''), [name]);


    const deleteCompanyImage = index => setPictures(pictures.filter((_, i) => i !== index));
    const weekDays = [
        {id: 'FromTo1', name: 'Sun', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo2', name: 'Mon', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo3', name: 'Tue', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo4', name: 'Wed', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo5', name: 'Thu', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo6', name: 'Fri', isChecked: false, from: '00:00', to: '00:00'},
        {id: 'FromTo7', name: 'Sat', isChecked: false, from: '00:00', to: '00:00'},
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const renderCompanyDetails = () => {
        return (
            <>
                <InstitutionPictures>
                    <Swiper
                        className="mySwiper"
                        slidesPerView={2}
                        spaceBetween={10}
                    >
                        {
                            pictures.map((el, index) => (
                                <SwiperSlide key={Math.random()}>
                                    <img src={el} alt=''/>
                                    <InstitutionBasketButton onClick={() => deleteCompanyImage(index)}>
                                        <DeleteBasketIcon/>
                                    </InstitutionBasketButton>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </InstitutionPictures>
                <SecondaryButton isWide>+Photo</SecondaryButton>
                <Divider/>
                <ContentContainer>
                    <Label>Company Name</Label>
                    <Input
                        value={name}
                        withCleaner
                        changeHandler={nameChangeHandler}
                        clearHandler={nameClearHandler}
                    />
                    <Label>City</Label>
                    <Input
                        value={city}
                        withCleaner
                        changeHandler={cityChangeHandler}
                        clearHandler={cityClearHandler}
                    />
                    <Label>Street</Label>
                    <Input
                        value={street}
                        withCleaner
                        changeHandler={streetChangeHandler}
                        clearHandler={streetClearHandler}
                    />
                    <Label>Work Schedule</Label>
                    {weekDays.map(day => <FromToTime key={day.id} id={day.id} weekDay={day.name} from={day.from} to={day.to} />)}

                </ContentContainer>
            </>
        )
    }

    return (
        <Wrapper>
            {renderCompanyDetails()}
            <PrimaryButton isWide>Save changes</PrimaryButton>
        </Wrapper>
    );
};

export default AddCompany;
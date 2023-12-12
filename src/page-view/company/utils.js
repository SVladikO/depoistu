import React from "react";

import {BasketButton} from "./company-view.style";

import {ReactComponent as DeleteBasketIcon} from 'assets/icons/delete_basket.svg'

import {SwiperWrapper} from 'components';

export const renderCompanyPhotos = ( photos = [], setPictures ) => {
    const deleteImage = index => setPictures(photos.filter((_, i) => i !== index));

    const slides = photos?.map((src, index) => (
        <div>
            <img src={src} alt=''/>
            <BasketButton onClick={() => deleteImage(index)}>
                <DeleteBasketIcon/>
            </BasketButton>
        </div>
    ));

    return <SwiperWrapper slidesPerView={1} slides={slides} />
}

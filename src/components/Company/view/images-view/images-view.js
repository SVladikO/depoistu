import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/pagination";

import {SwiperSlide} from "swiper/react";
import {SwiperWrapper} from "../../../index";
import ImageUrlFormatter from "utils/image.utils";
import defaultCompanyImg from "assets/images/default/default.png";
import {ImageWrapper} from "./images-view.style";

const formatUrl = ImageUrlFormatter.formatForCompany;

const ImagesView = ({company, isShowAllImages = true}) => {
    const companyPhotos = isShowAllImages ? company.photos : company.photos.slice(0, 1)

    if (!company?.is_verified || !company.photos?.length) {
        return (
            <ImageWrapper>
                <LazyLoadImage src={defaultCompanyImg} />
            </ImageWrapper>
        )
    }

    return (
        <SwiperWrapper>
            {companyPhotos.map(
                (src, index) => (
                    <SwiperSlide key={index}>
                        <ImageWrapper className={'image-wrapper'}>
                            <LazyLoadImage src={formatUrl(src)} alt="#"/>
                        </ImageWrapper>
                    </SwiperSlide>
                )
            )}
        </SwiperWrapper>
    )
}
export default ImagesView;
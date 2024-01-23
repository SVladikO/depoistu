import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/pagination";

import {SwiperSlide} from "swiper/react";
import {SwiperWrapper} from "../../../index";
import ImageUrlFormatter from "utils/image.utils";
import defaultCompanyImg from "assets/images/default/default.png";

const formatUrl = ImageUrlFormatter.formatForCompany;

const ImagesView = ({company, isShowAllImages = true}) => {
    const companyPhotos = isShowAllImages ? company.photos : company.photos.slice(0, 1)

    if (!company?.is_verified || !company.photos?.length) {
        return <LazyLoadImage src={defaultCompanyImg} width={'100%'} />
    }

    return (
        <SwiperWrapper>
            {companyPhotos.map(
                (src, index) => (
                    <SwiperSlide key={index}>
                        <LazyLoadImage src={formatUrl(src)} alt="#"/>
                    </SwiperSlide>
                )
            )}
        </SwiperWrapper>
    )
}
export default ImagesView;
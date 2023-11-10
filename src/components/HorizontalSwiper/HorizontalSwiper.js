import React, {useEffect, useState} from "react";
import {SliderStyle} from "./HorizontalSwiper.style";
import {Swiper} from "swiper/react";
import {FreeMode, Scrollbar} from "swiper";

const HorizontalSwiper = ({subCategoryIndex, children, slidesPerView = 3, sliderStylePadding = '0'}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = index => {
        // we should let 0 pass if too.
        if (swiper && (index || index === 0)) {
            swiper.slideTo(index)
        }
    };

    useEffect(() => {
        slideTo(subCategoryIndex)
    }, [subCategoryIndex])

    return (
        <SliderStyle sliderStylePadding={sliderStylePadding}>
            {/*https://studio.swiperjs.com/play*/}
            <Swiper
                modules={[Scrollbar, FreeMode]}
                scrollbar={{enabled: true, hide: true}}
                onSwiper={setSwiper}
                freeMode={{
                    enabled: true,
                    sticky: false,
                    momentum: true,
                    momentumBounce: true,
                    momentumRatio: 1,
                    momentumVelocityRatio: 1
                }}
                slidesPerView={slidesPerView}
                spaceBetween={10}
                className="category-slider"
            >
                {children}
            </Swiper>
        </SliderStyle>
    )
}

export default HorizontalSwiper;
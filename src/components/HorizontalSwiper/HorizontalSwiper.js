import React, {useEffect, useState} from "react";
import {SliderStyle} from "./HorizontalSwiper.style";
import {Swiper} from "swiper/react";
import {FreeMode, Scrollbar} from "swiper";

const HorizontalSwiper = ({selectedCategory, children}) => {
    const [swiper, setSwiper] = useState(null);

    const slideTo = category => {
        // we should let 0 pass if too.
        if (swiper && (category?.index || category?.index === 0)) {
            swiper.slideTo(category.index)
        }
    };

    useEffect(() => {
        slideTo(selectedCategory)
    }, [selectedCategory])

    return (
        <SliderStyle>
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
                slidesPerView={3}
                spaceBetween={10}
                className="category-slider"
            >
                {children}
            </Swiper>
        </SliderStyle>
    )
}

export default HorizontalSwiper;
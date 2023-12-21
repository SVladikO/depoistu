import {Swiper} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import {ImageSection} from "./SwiperWrapper.style";

export default function SwiperWrapper({slidesPerView = 1, children}) {

    return (
        <ImageSection>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={slidesPerView}
                navigation
                pagination={{clickable: true}}
            >
                {children}
            </Swiper>
        </ImageSection>
    )
}
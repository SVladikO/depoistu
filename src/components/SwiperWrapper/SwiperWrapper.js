import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {ImageSection} from "./SwiperWrapper.style";


export default function SwiperWrapper({slidesPerView = 1, slides}) {
    return (
        <ImageSection>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={slidesPerView}
                navigation
                pagination={{clickable: true}}
            >
                { slides.map((s, i) => (
                   <SwiperSlide key={i}>{s}</SwiperSlide>
                ))
                }
            </Swiper>
        </ImageSection>
    )
}
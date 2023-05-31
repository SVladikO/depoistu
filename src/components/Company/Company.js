import React, {useState} from 'react';
import {getScheduleAsObject} from "../../utils/utils";
import {Pagination, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {ReactComponent as RightAnchor} from "../../icons/right-anchor.svg";

import {
    Wrapper,
    ImageSection,
    Name,
    Address,
    Content,
    CompanyInfo,
    ScheduleContainer,
    ScheduleWrapper,
    Schedule,
    Open,
    Closes,
    DetailsAnchor,
    Phone,
    DetailedLink,
    ScheduleContent, Location
} from "./Company.style";

const ScheduleDetails = ({schedule}) => {
    const [isCompact, setIsCompact] = useState(false);

    if (!schedule || !schedule.length) {
        return;
    }

    const scheduleAsObject = getScheduleAsObject(schedule);

    if (!Object.keys(scheduleAsObject).length) {
        return;
    }

    if(!isCompact){
        return <div onClick={() => setIsCompact(true)}>
                    <DetailedLink>show schedule</DetailedLink>
               </div>
    }

    return Object.entries(scheduleAsObject)?.map((key, i) => {
        const closes = `${key[1].slice(6)}`
        const time = `${key[1].split('-').join(' ')}`;
        const from = time.split(' ')[0];
        const to = time.split(' ')[1];

        return (
            <ScheduleWrapper onClick={() => setIsCompact(false)}>
                <ScheduleContainer key={i}>
                    <div>
                        <div>{key[0]}</div>
                        <div>{from}</div>
                        <div>{to}</div>
                    </div>
                </ScheduleContainer>
            </ScheduleWrapper>
        )
    })
}


const Company = (props) => {

    if (!props.company) {
        return;
    }
    const {PHOTOS, NAME, CITY, STREET, SCHEDULE} = props.company;

    return (
        <Wrapper>
            <ImageSection>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                >
                    {PHOTOS && PHOTOS.split(', ')
                        .map((src, i) =>
                            <SwiperSlide key={i}>
                                <img src={src} alt="#"/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </ImageSection>
            <Content>
                <CompanyInfo>
                    <Name>{NAME}</Name>
                    <Location>
                        <Address>{CITY}, {STREET}</Address>
                        <DetailsAnchor><RightAnchor/></DetailsAnchor>
                    </Location>
                    <Schedule>
                        <Open>Open</Open>
                        <Closes>Closes<span>22</span></Closes>
                    </Schedule>
                    <Phone>80978432032</Phone>
                    <ScheduleContent>
                        <ScheduleDetails schedule={SCHEDULE}/>
                    </ScheduleContent>
                </CompanyInfo>
            </Content>
            {props.children}
        </Wrapper>
    );
};


export default Company;
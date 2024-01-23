import React from 'react';

import {Wrapper, Content} from "./Company.style";

import PhonesView from './view/phones-view/phones-veiw'
import TitleLike from "./view/title-like/title-like";
import CityStreet from "./view/city-street-view/city-street-view";
import ImagesView from "./view/images-view/images-view";
import StatusView from './view/status-view/status-view';
import BottomBarView from './view/bottom-bar-view/bottom-bar-view';
import ScheduleView from "./view/schedule-view/schedule-view";

const Company = props => {
    const {company, withMoreInfo, clickHandler} = props;

    if (!company) {
        return null;
    }

    return (
        <Wrapper withMoreInfo={withMoreInfo} onClick={clickHandler}>
            <ImagesView {...props}/>
            <Content>
                <TitleLike {...props} />
                <CityStreet {...props} />
                <StatusView company={company}/>
                <PhonesView {...props} />
                <ScheduleView {...props} />
                <BottomBarView {...props} />
            </Content>
        </Wrapper>);
};


export default Company;
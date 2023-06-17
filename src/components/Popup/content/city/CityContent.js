import {useState} from "react";

import {BackButtonWrapper, BackButtonInnerWrapper, Wrapper, CitiesWrapper} from "./CityContent.style"

import {SettingMenuRow} from '../../../index'

import {ReactComponent as BackIcon} from "../../../../icons/back.svg";
import uaCities from "./cities";
import {TRANSLATION, resolveTranslation} from '../../../../utils/translation';

const enableScrollOnBody = () => document.body.style.overflowY = 'auto';

const REGIONS = Object.keys(uaCities);

export const CityContent = ({selectCity, onClose}) => {
    const [cities, setCities] = useState(REGIONS);
    const [selectedRegion, setSelectedRegion] = useState('');

    const [isRegion, setIsRegion] = useState(true);

    const disableEventBubbling = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleBackButtonClick = () => {
        setIsRegion(true);
        setCities(REGIONS);
        setSelectedRegion('')
    }

    const renderBackButton = () => (
        <BackButtonWrapper>
            <BackButtonInnerWrapper onClick={handleBackButtonClick}>
                <BackIcon/>
                {resolveTranslation(TRANSLATION.PAGE.SEARCH.ARROW_LABEL)}
            </BackButtonInnerWrapper>
        </BackButtonWrapper>
    );

    const changeHandlerSettingMenuRow = city => () => {
        if (isRegion) {
            setSelectedRegion(city)
            setCities(uaCities[city])
            setIsRegion(false)
            return
        }

        selectCity([city, selectedRegion])
        enableScrollOnBody();
        onClose()
    }

    return (
        <Wrapper onClick={disableEventBubbling}>
            {!isRegion && renderBackButton()}
            <CitiesWrapper
                className="pma-cities"
                style={{height: isRegion ? '100%' : '92%'}}
                onClick={e => e.stopPropagation()}
            >
                {cities.map((city, i) =>
                    <SettingMenuRow
                        changeHandler={changeHandlerSettingMenuRow(city)}
                        key={i.toString()}
                        title={isRegion ? city + ' область' : city}
                        label=""
                        style={{margin: 0, padding: '0 0 20px'}}
                    />
                )}
            </CitiesWrapper>
        </Wrapper>
    )
};

export default CityContent;
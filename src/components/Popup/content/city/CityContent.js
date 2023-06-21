import {useState} from "react";

import {BackButtonWrapper, BackButtonInnerWrapper, Wrapper, CitiesWrapper} from "./CityContent.style"

import {SettingMenuRow} from '../../../index'

import {ReactComponent as BackIcon} from "../../../../icons/back.svg";
import {TRANSLATION, resolveTranslation} from '../../../../utils/translation';

const enableScrollOnBody = () => document.body.style.overflowY = 'auto';

export const CityContent = ({selectCity, oeCities, onClose}) => {
    const REGIONS = Object.keys(oeCities).map(key => ({name: key}));
    const [selectedRegion, setSelectedRegion] = useState('');
    const [citiesToRender, setCitiesToRender] = useState(REGIONS);

    const [isRegion, setIsRegion] = useState(true);

    const disableEventBubbling = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleBackButtonClick = () => {
        setIsRegion(true);
        setCitiesToRender(REGIONS);
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
            setSelectedRegion(city.name)
            setCitiesToRender(oeCities[city.name])
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
                {/*Expected array structure: [{name: 'Vinnica'}, ... ]*/}
                {citiesToRender.map((city, i) =>
                    <SettingMenuRow
                        changeHandler={changeHandlerSettingMenuRow(city)}
                        key={i.toString()}
                        title={isRegion ? city.name + ' область' : city.name}
                        label=""
                        style={{margin: 0, padding: '0 0 20px'}}
                    />
                )}
            </CitiesWrapper>
        </Wrapper>
    )
};

export default CityContent;
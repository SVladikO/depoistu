import {useRef, useState} from "react";

import {Header, BackButton, CloseIconWrapper, Wrapper, CitiesWrapper} from "./CityContent.style"

import {SettingMenuRow} from 'components'

import {ReactComponent as CloseIcon} from "assets/icons/close.svg";
import {ReactComponent as BackIcon} from "assets/icons/back.svg";

import {TRANSLATION, translate} from 'utils/translation';
import {generateRegionCityTree, CITY_TRANSLATION_IDS} from "utils/cities";

const enableScrollOnBody = () => document.body.style.overflowY = 'auto';

/**
 * Should render popup with list of regions and cities generated from availableCityIds.
 *
 * @param {function} onSelectCity
 * @param {array} availableCityIds
 * @param {function} onClose
 * @return {JSX.Element}
 * @constructor
 */
export const CityContent = ({onSelectCity, availableCityIds, onClose}) => {
    const regionCityTree = generateRegionCityTree(availableCityIds);
    const regionIds = Object.keys(regionCityTree);
    const [selectedRegionId, setSelectedRegionId] = useState('');
    const [citiesOrRegionsToRender, setCitiesOrRegionsToRender] = useState(regionIds);
    const [isRegion, setIsRegion] = useState(true);

    const topRef = useRef()
    const scrollToTop = () => topRef.current?.scrollIntoView({behavior: 'smooth'});

    const disableEventBubbling = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleBackButtonClick = () => {
        scrollToTop();
        setIsRegion(true);
        setCitiesOrRegionsToRender(regionIds);
        setSelectedRegionId('')
    }

    /**
     * Should handle select region or city by id.
     *
     * @param {string} id - Expect region id or city id.
     * @return {(function(): void)|*}
     */
    const changeHandlerSettingMenuRow = id => () => {
        scrollToTop();

        if (isRegion) {
            setSelectedRegionId(id)
            setCitiesOrRegionsToRender(regionCityTree[id])
            setIsRegion(false)
            return
        }

        onSelectCity([id, selectedRegionId])
        enableScrollOnBody();
        onClose()
    }

    const regionLabel = translate(TRANSLATION.COMPONENTS.POPUP.CITY.INPUT);

    return (
        <Wrapper onClick={disableEventBubbling}>

            <Header>
                {!isRegion ? (
                        <BackButton onClick={handleBackButtonClick}>
                            <BackIcon/>
                            {translate(TRANSLATION.PAGE.SEARCH.ARROW_LABEL)}
                        </BackButton>
                    )
                    : <div/>
                }
                <CloseIconWrapper onClick={onClose} className="close-popup-icon-wrapper">
                    <CloseIcon/>
                </CloseIconWrapper>
            </Header>
            <CitiesWrapper onClick={disableEventBubbling}>
                <div ref={topRef}/>
                {/*Expected array structure: ['101', '202', ... ]*/}
                {citiesOrRegionsToRender.map((id, i) =>
                    <SettingMenuRow
                        changeHandler={changeHandlerSettingMenuRow(id)}
                        key={i.toString()}
                        title={isRegion ? translate(CITY_TRANSLATION_IDS[id]) + regionLabel : translate(CITY_TRANSLATION_IDS[id])}
                        label=""
                        style={{margin: 0, padding: '0 0 20px'}}
                    />
                )}
            </CitiesWrapper>
        </Wrapper>
    )
};

export default CityContent;
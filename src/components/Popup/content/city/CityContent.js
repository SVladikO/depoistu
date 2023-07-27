import {useState} from "react";

import {BackButtonWrapper, BackButtonInnerWrapper, Wrapper, CitiesWrapper} from "./CityContent.style"

import {SettingMenuRow} from '../../../index'

import {ReactComponent as BackIcon} from "../../../../icons/back.svg";
import {TRANSLATION, translate} from '../../../../utils/translation';
import {generateRegionCityTree} from "../../../../utils/cities";
import {cities} from "../../../../utils/cities";

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

    const disableEventBubbling = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    const handleBackButtonClick = () => {
        setIsRegion(true);
        setCitiesOrRegionsToRender(regionIds);
        setSelectedRegionId('')
    }

    const renderBackButton = () => (
        <BackButtonWrapper>
            <BackButtonInnerWrapper onClick={handleBackButtonClick}>
                <BackIcon/>
                {translate(TRANSLATION.PAGE.SEARCH.ARROW_LABEL)}
            </BackButtonInnerWrapper>
        </BackButtonWrapper>
    );

    /**
     * Should handle select region or city by id.
     *
     * @param {string} id - Expect region id or city id.
     * @return {(function(): void)|*}
     */
    const changeHandlerSettingMenuRow = id => () => {
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
            {!isRegion && renderBackButton()}
            <CitiesWrapper
                className="pma-cities"
                style={{height: isRegion ? '100%' : '92%'}}
                onClick={e => e.stopPropagation()}
            >
                {/*Expected array structure: ['101', '202', ... ]*/}
                {citiesOrRegionsToRender.map((id, i) =>
                    <SettingMenuRow
                        changeHandler={changeHandlerSettingMenuRow(id)}
                        key={i.toString()}
                        title={isRegion ? translate(cities[id]) + regionLabel : translate(cities[id])}
                        label=""
                        style={{margin: 0, padding: '0 0 20px'}}
                    />
                )}
            </CitiesWrapper>
        </Wrapper>
    )
};

export default CityContent;
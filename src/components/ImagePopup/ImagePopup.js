import {useDispatch, useSelector} from "react-redux";

import {InvisibleWrapper, Wrapper, Image, CitiesContentBox} from './ImagePopup.style';
import {ReactComponent as CloseIcon} from "../../icons/close.svg";
import {hidePopup} from "../../features/imagePopup/imagePopupSlice";




const ImagePopup = () => {
    const isVisiblePopup = useSelector(state => state.imagePopup.value.isVisible);
    const imageUrl = useSelector(state => state.imagePopup.value.imageUrl);
    const showCities = useSelector(state => state.imagePopup.value.cities);
    const dispatch = useDispatch();
    console.log(showCities);
    if (!isVisiblePopup) {
        return null;
    }

    return (
        <InvisibleWrapper onClick={() => dispatch(hidePopup())}>
          <ImagePopupContent
                imageUrl={imageUrl}
                handleClose={() => dispatch(hidePopup())}
                cities={showCities}
            >
          </ImagePopupContent>
        </InvisibleWrapper>

    );
};
export const CitiesContent = ({cities}) => {
    return (
        <CitiesContentBox>
            {Object.keys(cities.cities).map(el => <div>{el}</div>)}
        </CitiesContentBox>
    )
}

export const ImagePopupContent = ({handleClose, imageUrl, cities}) => (
    <Wrapper onClick={(e) => e.stopPropagation()}>
        {!imageUrl ? <Image src={imageUrl}/> :
            <CitiesContent cities={cities}/>}
        <CloseIcon onClick={handleClose}/>
    </Wrapper>
);


export default ImagePopup;
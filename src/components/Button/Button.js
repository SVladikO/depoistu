import {LoadingButtonStyle, PrimaryButtonStyle} from "./Button.style";

import {ReactComponent as LoadingIcon} from "../../assets/icons/loading.svg";
import {translate, TRANSLATION} from "../../utils/translation";


export const PrimaryButton = ({isLoading, children, isWide, clickHandler}) => {

    if (isLoading) {
        return <LoadingButtonStyle isWide={isWide}>
            <LoadingIcon />
            {translate(TRANSLATION.COMPONENTS.BUTTON.LOADING)}{' ...'}
        </LoadingButtonStyle>
    }

    return (
        <PrimaryButtonStyle isWide={isWide} onClick={clickHandler}>{children}</PrimaryButtonStyle>
    )

}
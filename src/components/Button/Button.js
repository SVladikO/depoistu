import {LoadingButton, PrimaryButtonStyle} from "./Button.style";

import {translate, TRANSLATION} from "../../utils/translation";


export const PrimaryButton = ({isLoading, children, isWide}) => {


    if (isLoading) {
        return <LoadingButton>{translate(TRANSLATION.COMPONENTS.BUTTON.LOADING)}</LoadingButton>
    }

    return (
        <PrimaryButtonStyle isWide>{children}</PrimaryButtonStyle>
    )

}
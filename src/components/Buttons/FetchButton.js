import {ReactComponent as LoadingIcon} from "../../assets/icons/loading.svg";
import {translate, TRANSLATION} from "../../utils/translation";
import {PrimaryButton} from "./PrimaryButton";
import {LoadingButton} from "./LoadingButton";

export const FetchButton = ({isLoading, children, isWide, clickHandler}) => {

    if (isLoading) {
        return <LoadingButton isWide={isWide}>
            <LoadingIcon />
            {translate(TRANSLATION.COMPONENTS.BUTTON.LOADING)}{' ...'}
        </LoadingButton>
    }

    return (
        <PrimaryButton isWide={isWide} onClick={clickHandler}>{children}</PrimaryButton>
    )
}
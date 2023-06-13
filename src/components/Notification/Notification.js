import {Text} from "./Notification.style";

import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../icons/alert.svg";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {resolveTranslation} from "../../utils/utils";
import {TRANSLATION} from "../../utils/translation";


const Success = ({message, children}) => {
    return (
        <ContentContainer>
            <SuccessIcon/>
            <Text>{message}</Text>
            {children}
        </ContentContainer>
    )
}



const Loading = () => {
    return (
        <ContentContainer>
            <LoadingIcon className="animated_svg"/>
            <Text>{resolveTranslation(TRANSLATION.NOTIFICATION.LOADING)}</Text>
        </ContentContainer>
    )
};

const Error = ({message, children}) => {
    return (
        <ContentContainer>
            <ErrorIcon/>
            <Text>{message}</Text>
            {children}
        </ContentContainer>
    );
};

const Notification = {
    Success,
    Loading,
    Error
}

export default Notification;
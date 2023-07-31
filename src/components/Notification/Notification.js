import {Text} from "./Notification.style";

import {ReactComponent as LoadingIcon} from "../../assets/icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../assets/icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../assets/icons/alert.svg";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {TRANSLATION, translate} from "../../utils/translation";


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
            <Text>{translate(TRANSLATION.NOTIFICATION.LOADING)}</Text>
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
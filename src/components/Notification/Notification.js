import {useSelector} from "react-redux";

import {Text} from "./Notification.style";

import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../icons/alert.svg";

import {ContentContainer} from "../ContentContainer/ContentContainer.style";


const Success = () => {
    return (
        <ContentContainer>
            <SuccessIcon/>
            <Text>Order placed.</Text>
        </ContentContainer>
    )
}

const Loading = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);

    if (!isLoading) {
        return;
    }

    return (
        <ContentContainer>
            <LoadingIcon className="animated_svg"/>
            <Text>Loading...</Text>
        </ContentContainer>
    )
};


const Error = () => {
    const message = useSelector(state => state.error.value);

    if (!message) {
        return;
    }

    return (
        <ContentContainer>
            <ErrorIcon/>
            <Text>{message}</Text>
        </ContentContainer>
    );
};

const Notification = {
    Success,
    Loading,
    Error
}

export default Notification;
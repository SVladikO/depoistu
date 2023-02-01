import {useSelector} from "react-redux";

import {Wrapper, Text} from "./Notification.style";

import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../icons/alert.svg";
import {ContentContainer} from "../ContentContainer/ContentContainer.style";


// const NotificationConstructor = (props) => {
//     const {Icon, text} = props;
//     return (
//         <ContentContainer>
//             <Icon/>
//             <Text>{text}</Text>
//         </ContentContainer>
//     )
// }

const Success = ({text}) => {
    return(
        <ContentContainer>
            <SuccessIcon/>
            <Text>{text}</Text>
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
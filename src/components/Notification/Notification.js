import {useSelector} from "react-redux";
import {ReactComponent as LoadingIcon} from "../../icons/spinner.svg";
import {ReactComponent as SuccessIcon} from "../../icons/success.svg";
import {ReactComponent as ErrorIcon} from "../../icons/alert.svg";
import {Wrapper, Text} from "./Notification.style";



const NotificationConstructor = (props) => {
    const {Icon, text} = props;
    return (
        <Wrapper>
            <Icon/>
            <Text>{text}</Text>
            {props.children}
        </Wrapper>
    )
}

const Success = ({Icon, text}) => <NotificationConstructor Icon={SuccessIcon} text="Order placed."/>

const Loading = ({text}) => {
    const isLoading = useSelector(state => state.request.value.isLoading);
    console.log(isLoading)
    if (!isLoading) {
        return;
    }
    return (
        <NotificationConstructor className="animated_svg" Icon={LoadingIcon} text={text}/>
    )
};


const Error = () => {
    const message = useSelector(state => state.error.value);

    return (
        <NotificationConstructor/>
    );
};

const Notification = {
    Success,
    Loading,
    Error
}

export default Notification;
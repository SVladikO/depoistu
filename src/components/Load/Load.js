import {Wrapper} from "./Load.style";
import {ReactComponent as LoadingIcon} from "../../icons/loading.svg";
import {useSelector} from "react-redux";

const Load = () => {
    const isLoading = useSelector(state => state.request.value.isLoading);

    if (!isLoading) {
        return;
    }

    return (
        <Wrapper>
            <LoadingIcon className="animated_svg"/>
            <span>Loading...</span>
        </Wrapper>
    );
};

export default Load;
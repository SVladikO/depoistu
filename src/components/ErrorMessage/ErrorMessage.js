import {useSelector} from "react-redux";

const ErrorMessage = () => {
    const message = useSelector(state => state.error.value);

    return (
        <>
            {message && <div className="pm-ErrorMessage">{message}</div>}
        </>
    );
};

export default ErrorMessage;
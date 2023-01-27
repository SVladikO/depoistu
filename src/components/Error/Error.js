import {useSelector} from "react-redux";

const Error = () => {
    const message = useSelector(state => state.error.value.message);

    return (
        <>
            {message && <div className="pm-ErrorMessage">{message}</div>}
        </>
    );
};

export default Error;
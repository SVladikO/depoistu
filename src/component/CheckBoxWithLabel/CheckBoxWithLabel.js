import Wrapper from './CheckBoxWithLabel.style';
import {useState} from "react";

const CheckBoxWithLabel = (props) => {
    const [value, setCheckbox] = useState(true);
    const {labelValue} = props;
    return (
        <Wrapper
            label={labelValue}
            value={value}
            checked={value}
            onChange={({ target }) => setCheckbox(!value)}
        />
    );
};

export default CheckBoxWithLabel;

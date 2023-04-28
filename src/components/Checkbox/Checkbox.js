import {CheckboxStyle} from './Checkbox.style'

const Checkbox = ({id, type = 'checkbox', isChecked, changeHandler}) =>
    <CheckboxStyle
        defaultCheked
        type={type}
        checked={isChecked}
        onChange={changeHandler}
        id={id}
    />;

export default Checkbox;

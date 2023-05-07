import {CheckboxStyle} from './Checkbox.style'

const Checkbox = ({id, name, type = 'checkbox', isChecked, changeHandler}) =>
    <CheckboxStyle
        name={name}
        defaultCheked
        type={type}
        checked={isChecked}
        onChange={changeHandler}
        id={id}
    />;

export default Checkbox;

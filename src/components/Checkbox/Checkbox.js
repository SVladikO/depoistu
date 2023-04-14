import {CheckboxStyle} from './Checkbox.style'

const Checkbox = ({id, type = 'checkbox', isChecked, handlerChange}) =>
    <CheckboxStyle
        defaultCheked
        type={type}
        checked={isChecked}
        onChange={handlerChange}
        id={id}
    />;

export default Checkbox;

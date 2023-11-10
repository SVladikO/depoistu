import {Wrapper, CheckboxStyle} from './Checkbox.style'

const Checkbox = ({id, name, lableName, value, type = 'checkbox', isChecked, changeHandler}) =>
    <Wrapper>
        <CheckboxStyle
            type={type}
            value={value}
            name={name}
            onChange={changeHandler}
            defaultCheked
            isLabelExist={!!lableName}
            checked={isChecked}
            id={id}
        />
        {lableName}
    </Wrapper>

export default Checkbox;

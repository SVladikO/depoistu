import React, {useState, memo} from "react";
import {
    Wrapper,
    InputText,
    SwitchIconWrapper,
    CenterWrapper,
    ClearWrapper,
    PInputWrapper,
    PStyle,
    TextareaStyle,
    WarningMessage,
    Placeholder,
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";
import {ReactComponent as ClearIcon} from "../../icons/close.svg";

export const Textarea = memo(function ({
                                           errorMessage,
                                           withCleaner,
                                           isTouched,
                                           value,
                                           name,
                                           changeHandler = () => {},
                                           clearHandler = () => {},
                                       }) {

    return (
        <div>
            <Wrapper>
                <TextareaStyle
                    value={value}
                    name={name}
                    onChange={changeHandler}
                />
                {value && withCleaner && <ClearWrapper onClick={clearHandler}><ClearIcon/></ClearWrapper>}
            </Wrapper>
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </div>
    );
});

const INPUT_TYPE = {
    PASSWORD: 'password',
    TEXT: 'text'
}

export const Input = memo(function ({
                                        Icon,
                                        type = INPUT_TYPE.TEXT,
                                        value,
                                        name,
                                        errorMessage,
                                        focusHandler,
                                        blurHandler,
                                        isTouched,
                                        withSwitcher = false,
                                        withCleaner = false,
                                        changeHandler,
                                        clearHandler,
                                        ...props
                                    }) {
    const [inputType, setInputType] = useState(withSwitcher ? INPUT_TYPE.PASSWORD : type);
    const handleSwitch = () => setInputType(inputType === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD);

    return (
        <div>
            <Wrapper className='pma-input'>
                {Icon && <Icon/>}
                <InputText
                    name={name}
                    value={value}
                    onChange={changeHandler}
                    type={inputType}
                    withRightIcon={withSwitcher || withCleaner}
                    withLeftIcon={!!Icon}
                    withSwitcher={withSwitcher}
                    {...props}
                />
                {withSwitcher &&
                    <SwitchIconWrapper onClick={handleSwitch}>
                        <CenterWrapper>
                            {inputType === INPUT_TYPE.PASSWORD ? <ShowEyeIcon/> : <HideEyeIcon/>}
                        </CenterWrapper>
                    </SwitchIconWrapper>
                }
                {!!value && withCleaner &&
                    <ClearWrapper {...props} onClick={clearHandler}>
                        <ClearIcon/>
                    </ClearWrapper>}
            </Wrapper>
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </div>
    )
});

export const PInput = ({Icon, value, placeholder, handleClick, isTouched, errorMessage}) => {
    return (
        <div>
            <PInputWrapper onClick={handleClick}>
                {Icon && <Icon/>}
                <PStyle withLeftIcon={!!Icon}>{value || <Placeholder>{placeholder}</Placeholder>}</PStyle>
            </PInputWrapper>
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </div>
    )
};


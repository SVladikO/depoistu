import React, {useState, memo} from "react";
import {
    Wrapper,
    InputText,
    SwitchIconWrapper,
    CenterWrapper,
    ClearWrapper,
    CityInputWrapper,
    CityInputValue,
    TextareaStyle,
    Label,
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "assets/icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "assets/icons/hide-eye.svg";
import {ReactComponent as ClearIcon} from "assets/icons/close.svg";
import {ReactComponent as SearchIcon} from "assets/icons/search.svg";

import {WarningMessage} from "components";

export const Textarea = memo(function ({
                                           errorMessage,
                                           withCleaner,
                                           isTouched,
                                           value,
                                           name,
                                           changeHandler = () => {},
                                           clearHandler = () => {},
                                           labelName = '',
                                           isRequired = false,
                                           placeholder = ''
                                       }) {

    return (
        <div>
            <Wrapper isTouched={value ? false : isTouched} errorMessage={errorMessage}>
                {labelName && <Label isRequired={isRequired}>{labelName}</Label>}
                <TextareaStyle
                    value={value}
                    name={name}
                    onChange={e => {
                        e.target.value = e.target.value.replaceAll("'", "ʼ")
                        changeHandler(e)
                    }}
                    placeholder={placeholder}
                />
                {value && withCleaner && <ClearWrapper onClick={clearHandler}><ClearIcon /></ClearWrapper>}
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
                                        isTouched,
                                        withSwitcher = false,
                                        withCleaner = false,
                                        changeHandler = () => {},
                                        clearHandler,
                                        labelName,
                                        isRequired
                                    }) {
    const [inputType, setInputType] = useState(withSwitcher ? INPUT_TYPE.PASSWORD : type);
    const handleSwitch = () => setInputType(inputType === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD);

    return (
        <Wrapper
            className='pma-input'
            isTouched={value ? false : isTouched}
            errorMessage={errorMessage}
        >
            {Icon && <Icon />}
            {labelName && <Label isRequired={isRequired}>{labelName}</Label>}
            <InputText
                name={name}
                value={value}
                onChange={e => {
                    e.target.value = e.target.value.replaceAll("'", "ʼ")
                    changeHandler(e)
                }}
                type={inputType}
                withRightIcon={withSwitcher || withCleaner}
                withLeftIcon={!!Icon}
                withSwitcher={withSwitcher}
                isTouched={value ? false : isTouched}
                errorMessage={errorMessage}
            />
            {withSwitcher &&
                <SwitchIconWrapper onClick={handleSwitch}>
                    <CenterWrapper>
                        {inputType === INPUT_TYPE.PASSWORD ? <ShowEyeIcon /> : <HideEyeIcon />}
                    </CenterWrapper>
                </SwitchIconWrapper>
            }
            {!!value && withCleaner &&
                <ClearWrapper onClick={clearHandler}>
                    <ClearIcon />
                </ClearWrapper>}
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </Wrapper>
    )
});

export const CityInput = (props) => {
    const {
        value,
        placeholder,
        handleClick,
        isTouched,
        errorMessage,
        labelName,
        isRequired,
    } = props

    return (
        <div>
            <CityInputWrapper
                onClick={handleClick}
                isTouched={value ? false : isTouched}
                errorMessage={errorMessage}
            >
                {labelName && <Label isRequired={isRequired}>{labelName}</Label>}
                <SearchIcon/>
                <CityInputValue withLeftIcon>{value || placeholder}</CityInputValue>
            </CityInputWrapper>
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </div>
    )
};


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
    WarningMessage
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";
import {ReactComponent as ClearIcon} from "../../icons/close.svg";

export const Textarea = memo(function ({
                                           errorMessage,
                                           withCleaner,
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
                {withCleaner && <ClearWrapper onClick={clearHandler}><ClearIcon/></ClearWrapper>}
            </Wrapper>
            {errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
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
                                        withSwitcher = false,
                                        withCleaner = false,
                                        changeHandler = () => {
                                        },
                                        clearHandler = () => {
                                        },
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
                {withCleaner &&
                    <ClearWrapper {...props} onClick={clearHandler}>
                        <ClearIcon/>
                    </ClearWrapper>
                }
            </Wrapper>
            {errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </div>
    )
});

export const PInput = ({
                           Icon,
                           children,
                           handleClick = () => {
                           },
                       }) => {
    return (<PInputWrapper onClick={handleClick}>
            {Icon && <Icon/>}
            <PStyle withLeftIcon={!!Icon}>{children}</PStyle>
        </PInputWrapper>
    )
};


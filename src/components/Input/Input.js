import React, {useState, memo, useCallback} from "react";
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
                                           withCleaner,
                                           value,
                                           name,
                                           changeHandler = () => {
                                           },
                                       }) {

    const clearHandler = useCallback(e => {
        const rowParent = e.currentTarget.parentElement;
        rowParent.firstChild.value = '';
    }, []);

    return (
        <Wrapper>
            <TextareaStyle
                value={value}
                name={name}
                onChange={changeHandler}
            />
            {withCleaner && <ClearWrapper onClick={clearHandler}><ClearIcon/></ClearWrapper>
            }
        </Wrapper>
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
                                        warningMessage,
                                        withSwitcher = false,
                                        withCleaner = false,
                                        changeHandler = () => {},
                                        ...props
                                    }) {
    const [inputType, setInputType] = useState(withSwitcher ? INPUT_TYPE.PASSWORD : type);
    const handleSwitch = () => setInputType(inputType === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD);

    const clearHandler = useCallback(e => {
        const rowParent = e.currentTarget.parentElement;
        const input = rowParent.childNodes[0].tagName === 'INPUT'
            ? rowParent.childNodes[0]
            : rowParent.childNodes[1];

        input.value = '';
    }, []);

    return (
        <>
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
                        <ClearIcon />
                    </ClearWrapper>
                }
            </Wrapper>
            {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
        </>

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


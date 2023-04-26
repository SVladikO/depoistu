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
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";
import {ReactComponent as ClearIcon} from "../../icons/close.svg";

export const Textarea = memo(function ({
                                           withCleaner,
                                           value,
                                           changeHandler = () => {
                                           },
                                           clearHandler = () => {
                                           }
                                       }) {
    return (
        <Wrapper>
            <TextareaStyle
                value={value}
                onChange={e => changeHandler(e.toString.value)}
            />
            {withCleaner && <ClearWrapper><ClearIcon onClick={clearHandler}/></ClearWrapper>
            }
        </Wrapper>
    );
});

export const Input = memo(function ({
                                        Icon,
                                        type = 'text',
                                        value,
                                        name,
                                        withSwitcher = false,
                                        withCleaner = false,
                                        changeHandler = () => {
                                        },
                                        switchHandler = () => {
                                        },
                                        ...props
                                    }) {

    const [showData, setShowData] = useState(false);

    const handleSwitch = () => {
        setShowData(!showData)
        switchHandler();
    }

    const clearHandler = useCallback(e => {
        const rowParent = e.currentTarget.parentElement;
        const input = rowParent.childNodes[0].tagName === 'INPUT'
            ? rowParent.childNodes[0]
            : rowParent.childNodes[1];

        input.value = '';
    }, []);

    return (
        <Wrapper className='pma-input'>
            {Icon && <Icon/>}
            <InputText
                name={name}
                value={value}
                onChange={changeHandler}
                type={type}
                withRightIcon={withSwitcher || withCleaner}
                withLeftIcon={!!Icon}
                withSwitcher={withSwitcher}
                {...props}
            />
            {withSwitcher &&
                <SwitchIconWrapper onClick={handleSwitch}>
                    <CenterWrapper>
                        {showData ? <HideEyeIcon/> : <ShowEyeIcon/>}
                    </CenterWrapper>
                </SwitchIconWrapper>
            }
            {withCleaner &&
                <ClearWrapper {...props} onClick={clearHandler}>
                    <ClearIcon />
                </ClearWrapper>
            }
        </Wrapper>
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


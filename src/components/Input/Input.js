import React, {useState, memo} from "react";
import {
    Wrapper,
    InputText,
    SwitchIconWrapper,
    CenterWrapper,
    CloseIconWrapper,
    PInputWrapper,
    PStyle,
    TextareaStyle,
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";
import {ReactComponent as CloseIcon} from "../../icons/close.svg";

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
            {withCleaner && <CloseIconWrapper><CloseIcon onClick={clearHandler}/></CloseIconWrapper>
            }
        </Wrapper>
    );
});

export const Input = memo(function ({
                                        Icon,
                                        type,
                                        value,
                                        name,
                                        withSwitcher = false,
                                        withCleaner = false,
                                        clearHandler = () => {
                                        },
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

    console.log(value)

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
                <CloseIconWrapper {...props}>
                    <CloseIcon onClick={clearHandler}/>
                </CloseIconWrapper>
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


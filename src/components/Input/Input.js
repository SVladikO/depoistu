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

export function Textarea({withCleaner, value, changeHandler=() => {}, onClear = () => {}}) {
    return (
        <Wrapper>
            <TextareaStyle value={value} onChange={changeHandler}/>
            {withCleaner &&<CloseIconWrapper><CloseIcon onClick={onClear}/></CloseIconWrapper>
            }
        </Wrapper>
    );
}

export const Input = memo(function ({
// export function Input({
                          Icon,
                          value,
                          type,
                          withSwitcher = false,
                          withCleaner = false,
                          clearHandler = () => {},
                          changeHandler = () => {},
                          switchHandler = () => {},
                          ...props
                      }) {

    const [showData, setShowData] = useState(false);

    const handleSwitch = () => {
        setShowData(!showData)
        switchHandler();
    }

    console.log(33333, value)

    return (
        <Wrapper className='pma-input'>
            {Icon && <Icon/>}
            <InputText
                value={value}
                onChange={e => changeHandler(e.target.value)}
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
                           handleClick = () => {},
                       }) => {
    return (<PInputWrapper onClick={handleClick}>
            {Icon && <Icon/>}
            <PStyle withLeftIcon={!!Icon}>{children}</PStyle>
        </PInputWrapper>
    )
};


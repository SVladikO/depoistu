import React, {useState} from "react";
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

export function Textarea({withCleaner, changeHandler}) {
    return (
        <Wrapper>
            <TextareaStyle>

            </TextareaStyle>
            {withCleaner &&
                <CloseIconWrapper>
                    <CloseIcon onClick={changeHandler}/>
                </CloseIconWrapper>
            }
        </Wrapper>
    );
}

export function Input({
                          Icon,
                          value,
                          type,
                          placeholder,
                          changeHandler = () => {
                          },
                          withSwitcher = false,
                          withCleaner = false,
                          ...props
                      }) {

    const [showData, setShowData] = useState(false);

    const showValue = () => {
        setShowData(true);
    }

    const hideValue = () => setShowData(false);

    return (
        <Wrapper className='pma-input'>
            {Icon && <Icon/>}
            <InputText
                type={type}
                value={value}
                withIcon={!!Icon}
                onChange={changeHandler}
                withSwitcher={withSwitcher}
                placeholder={placeholder}
                {...props}
            />
            {withSwitcher &&
                <SwitchIconWrapper onClick={showData ? hideValue : showValue}>
                    <CenterWrapper>
                        {showData ? <HideEyeIcon/> : <ShowEyeIcon/>}
                    </CenterWrapper>
                </SwitchIconWrapper>
            }
            {withCleaner &&
                <CloseIconWrapper {...props}>
                    <CloseIcon onClick={changeHandler}/>
                </CloseIconWrapper>
            }
        </Wrapper>
    )
}

export const PInput = ({
                           Icon,
                           children,
                           handleClick = () => {
                           },
                       }) => {
    return (<PInputWrapper onClick={handleClick}>
            {Icon && <Icon/>}
            <PStyle withIcon={!!Icon}>{children}</PStyle>
        </PInputWrapper>
    )
};


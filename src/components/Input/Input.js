import React, {useState} from "react";
import {
    Wrapper,
    InputText,
    SwitchIconWrapper,
    CenterWrapper,
    CloseIconWrapper,
    PInputWrapper,
    PStyle,
} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";
import {ReactComponent as CloseIcon} from "../../icons/close.svg";

export function Input({
                   Icon,
                   value,
                   type,
                   placeholder,
                   inputmode,
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
        <Wrapper>
            {Icon && <Icon/>}
            <InputText
                type={type}
                value={value}
                withIcon={!!Icon}
                onChange={changeHandler}
                withSwitcher={withSwitcher}
                placeholder={placeholder}
                inputMode={inputmode || 'text'}

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
                    <CloseIcon/>
                </CloseIconWrapper>
            }
        </Wrapper>
    )
}

// It only looks like input but it's p tag
export const PInput = ({
                           Icon,
                           children,
                           handleClick = () => {},
}) => {
    return (<PInputWrapper onClick={handleClick}>
            {Icon && <Icon/>}
            <PStyle withIcon={!!Icon}>{children}</PStyle>
        </PInputWrapper>
    )
};

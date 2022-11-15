import React, {useState} from "react";
import {Wrapper, InputText, SwitchIconWrapper, CenterWrapper} from "./Input.style";

import {ReactComponent as ShowEyeIcon} from "../../icons/show-eye.svg";
import {ReactComponent as HideEyeIcon} from "../../icons/hide-eye.svg";

function Input({
                   Icon,
                   value,
                   placeholder,
                   changeHandler = () => {
                   },
                   withSwitcher = false,

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
                type={!withSwitcher ? 'text' : showData ? 'text' : 'password'}
                value={value}
                withIcon={!!Icon}
                onChange={changeHandler}
                withSwitcher={withSwitcher}
                placeholder={placeholder}
            />
            {withSwitcher &&
                <SwitchIconWrapper onClick={showData ? hideValue : showValue}>
                    <CenterWrapper>
                        {showData ? <HideEyeIcon/> : <ShowEyeIcon/>}
                    </CenterWrapper>
                </SwitchIconWrapper>
            }
        </Wrapper>
    )
}

export default Input;
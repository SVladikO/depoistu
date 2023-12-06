import React, {useEffect, useRef, useState} from 'react';


import {SelectWrapper, SelectButton, OptionsContainer, Option, GroupTitleOption} from "./Dropdown.style";

import {ReactComponent as DropdownIcon} from "assets/icons/chevron.svg";

import {WarningMessage} from "components";
import {TRANSLATION, translate} from "utils/translation";
import {Label} from "../Input/Input.style";

const Dropdown = ({options, selectedOption, onSelect, errorMessage, label, isRequired}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [top, setTop] = useState(false);
    const dropdownRef = useRef(null);
    const optionsContainerClassName = (Math.random() + 1).toString(36).substring(7);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        debugger

    }

    const handleOptionSelect = option => e => {
        setIsOpen(false);
        setTop(e.target.offsetTop)
        onSelect(option);
    };

    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // document.getElementsByClassName(optionsContainerClassName)[0].scrollTo({top})

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [])
    return (
        <SelectWrapper isOpen={isOpen} ref={dropdownRef}>
            {label ? (
                <Label isRequired={isRequired} isOpen={isOpen}>
                    {label}
                </Label>
            ) : null}
            <SelectButton type="button" isOpen={isOpen} onClick={toggleDropdown}>
                {selectedOption?.title || translate(TRANSLATION.INPUT_LABEL.DROPDOWN_TITLE)}
                <DropdownIcon/>
            </SelectButton>
                <OptionsContainer className={optionsContainerClassName} isOpen={isOpen}>
                    {options.map(option => (
                        option.isGroupTitle
                            ? <GroupTitleOption key={option.title}>{option.title}</GroupTitleOption>
                            : <Option
                                isSelected={selectedOption?.value === option.value}
                                key={option.value}
                                onClick={handleOptionSelect(option)}
                            >
                                {option.title}
                            </Option>
                    ))}
                </OptionsContainer>
            {errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </SelectWrapper>
    );
};

export default Dropdown;
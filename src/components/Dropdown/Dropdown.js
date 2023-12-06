import React, {useEffect, useRef, useState} from 'react';


import {SelectWrapper, SelectButton, OptionsContainer, Option, GroupTitleOption} from "./Dropdown.style";

import {ReactComponent as DropdownIcon} from "assets/icons/chevron.svg";

import {WarningMessage} from "components";
import {TRANSLATION, translate} from "utils/translation";
import {Label} from "../Input/Input.style";

const Dropdown = ({options, selectedOption, onSelect, errorMessage, label, isRequired}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    console.log(2222, selectedOption)

    const handleOptionSelect = option => {
        setIsOpen(false);
        onSelect(option);
    };

    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

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
            <OptionsContainer isOpen={isOpen}>
                {options.map((option, i) => (
                    option.isGroupTitle
                        ? <GroupTitleOption key={i}>{option.title}</GroupTitleOption>
                        : <Option
                            key={i}
                            isSelected={selectedOption?.value === option.value}
                            onClick={() => handleOptionSelect(option)}
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
import React, {useEffect, useRef, useState} from 'react';
import {SelectWrapper,SelectButton, OptionsContainer, Option} from "./Dropdown.style";
import {ReactComponent as DropdownIcon} from "../../icons/dropdownicon.svg";
import {TRANSLATION, translate} from "../../utils/translation";
import WarningMessage from "../WarningMessage/WarningMessage";



const Dropdown = ({ options, selectedCategoryId , onSelect, isTouched, errorMessage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {setIsOpen(!isOpen)};

    const handleOptionSelect = option => {
        setSelectedOption(option)
        setIsOpen(false);
        onSelect(option);
    };

    useEffect(() => {

        const handleClickOutside = event => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    },[])

    return (
        <SelectWrapper ref={dropdownRef}>
            <SelectButton type="button" isOpen={isOpen} onClick={toggleDropdown}>
                {!selectedOption?.title ? translate(TRANSLATION.INPUT_LABEL.DROPDOWN_TITLE) : selectedOption?.title || selectedCategoryId?.title}
                <DropdownIcon/>
            </SelectButton>
            {isOpen && (
                <OptionsContainer>
                    {options.map(option => (
                        <Option
                            isSelected={selectedCategoryId?.value === option.value}
                            key={option.value}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option.title}
                        </Option>
                    ))}
                </OptionsContainer>
            )}
            {isTouched && errorMessage && <WarningMessage>{errorMessage}</WarningMessage>}
        </SelectWrapper>
    );
};

export default Dropdown;
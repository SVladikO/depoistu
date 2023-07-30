import React, {useState} from 'react';
import {SelectWrapper,SelectButton, OptionsContainer, Option} from "./Dropdown.style";
import {ReactComponent as DropdownIcon} from "../../icons/dropdownicon.svg";
import {translate, TRANSLATION} from "../../utils/translation";

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <SelectWrapper>
            <SelectButton type="button" isOpen={isOpen} onClick={toggleDropdown}>
                {selectedOption ? selectedOption.title : translate(TRANSLATION.INPUT_LABEL.DROPDOWN_TITLE)}
                <DropdownIcon/>
            </SelectButton>
            {isOpen && (
                <OptionsContainer>
                    {options.map((option) => (
                        <Option key={option.id} onClick={() => handleOptionSelect(option)}>
                            {option.title}
                        </Option>
                    ))}
                </OptionsContainer>
            )}
        </SelectWrapper>
    );
};

export default Dropdown;
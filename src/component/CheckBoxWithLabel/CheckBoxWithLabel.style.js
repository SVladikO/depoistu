import React from "react";
import styled, {keyframes} from "styled-components";
import {THEME} from "../../theme";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  padding: 0 0 0 13px;
  text-align: center;
  color: ${THEME.COLOR.ACCENT1};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const rotate = keyframes`
  from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 15px;
  height: 15px;
  background: ${THEME.COLOR.ACCENT4};
  position: absolute;
  top: 0;
  left: 0;
  outline: 2px solid ${THEME.COLOR.ACCENT2};
  border-radius: 2px;

  ${Input}:not(:disabled):checked & {
    background: ${THEME.COLOR.ACCENT4};
  }

  ${Label}:hover & {
    background: ${THEME.COLOR.ACCENT2};
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    top: -2px;
    left: 3px;
    width: 35%;
    height: 70%;
    border: solid ${THEME.COLOR.PRIMARY};
    border-width: 0 4px 4px 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Wrapper({
                                    value,
                                    checked,
                                    onChange,
                                    name,
                                    id,
                                    label,
                                    disabled
                                }) {
    return (
        <Label htmlFor={id} disabled={disabled}>
            {label}
            <Input
                id={id}
                type="checkbox"
                name={name}
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <Indicator/>
        </Label>
    );
}
import React, {useState} from "react";
import {
    ButtonSection,
    EditButton,
    ImagePlace,
    MenuItemEditor,
    MenuItemPhoto,
    WideButton
} from "./EditMenuItem.style";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {Input} from "../Input/Input";
import {Label} from "../../components";

function EditMenuItem(props) {
    const {
        NAME,
        DESCRIPTION,
        PRICE,
        SIZE,
        IMAGE_URL,
        COOKING_TIME
    } = props.menu;

    const [name, setName] = useState(NAME);
    const [price, setPrice] = useState(PRICE);
    const [description, setDescription] = useState(DESCRIPTION);
    const [cookingTime, setCookingTime] = useState(COOKING_TIME);
    const [imageURL, setImageURL] = useState(IMAGE_URL);
    const [size, setSize] = useState(SIZE);

    return (
        <MenuItemEditor>
            <MenuItemPhoto>
                {imageURL
                    ? <img src={imageURL} alt='Food'/>
                    : <ImagePlace/>}
                <ButtonSection>
                    <EditButton>Add</EditButton>
                </ButtonSection>
            </MenuItemPhoto>
            <Label inputName="Name"/>
            <Input withCleaner value={name} placeholder='Name'/>
            <Label inputName="Price"/>
            <Input withCleaner value={price} placeholder='Price'/>
            <Label inputName="Description"/>
            <Input withCleaner value={description} placeholder='Description'/>
            <Label inputName="Cooking time"/>
            <Input withCleaner value={cookingTime} placeholder='Cooking time'/>
            <Label inputName="Meal size"/>
            <Input withCleaner value={size} placeholder='Meal size'/>
            <WideButton>Delete<RemoveIcon/></WideButton>
        </MenuItemEditor>
    );
}

export default EditMenuItem;
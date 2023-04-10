import React, {useState} from "react";
import {
    ButtonSection,
    EditButton,
    ImagePlace,
    MenuItemPhoto,
    WideButton
} from "./EditMenuItem.style";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {Input} from "../Input/Input";
import {Label} from "../../components";
import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {SecondaryButton} from "../Button/Button.style";

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
        <>
            <SecondaryButton><RemoveIcon/> Delete</SecondaryButton>
            <ContentContainer>
                <MenuItemPhoto>
                    {imageURL
                        ? <img src={imageURL} alt='Food'/>
                        : <ImagePlace/>}
                    <ButtonSection>
                        <EditButton>Add</EditButton>
                    </ButtonSection>
                </MenuItemPhoto>
                <Label>Name</Label>
                <Input withCleaner value={name} placeholder='Name'/>
                <Label>Price</Label>
                <Input withCleaner value={price} placeholder='Price'/>
                <Label>Description</Label>
                <Input withCleaner value={description} placeholder='Description'/>
                <Label>Cooking Time</Label>
                <Input withCleaner value={cookingTime} placeholder='Cooking time'/>
                <Label>Meal Size</Label>
                <Input withCleaner value={size} placeholder='Meal size'/>
            </ContentContainer>
            <WideButton>Save</WideButton>
        </>
    );
}

export default EditMenuItem;
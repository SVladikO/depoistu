import React, {useState} from "react";
import {
    ImagePlace,
    MenuItemPhoto,
    WideButton
} from "./EditMenuItem.style";

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";
import {Input, Textarea} from "../Input/Input";
import {Label} from "../../components";
import {ContentContainer} from "../ContentContainer/ContentContainer.style";
import {SecondaryButton} from "../Button/Button.style";

function EditMenuItem({
                          menuItem: {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE}
                      }) {

    const [name, setName] = useState(NAME);
    const [price, setPrice] = useState(PRICE);
    const [description, setDescription] = useState(DESCRIPTION);
    const [cookingTime, setCookingTime] = useState(COOKING_TIME);
    const [imageURL, setImageURL] = useState(IMAGE_URL);
    const [size, setSize] = useState(SIZE);

    console.log(2222, {name, price, description, cookingTime, imageURL, size})

    return (
        <>
            <SecondaryButton><RemoveIcon/> Delete</SecondaryButton>
            <ContentContainer>
                <MenuItemPhoto>
                    {imageURL
                        ? <img src={imageURL} alt='Food'/>   // setImageURL
                        : <ImagePlace/>}
                    <SecondaryButton>{imageURL ? 'Change' : 'Add'}</SecondaryButton>
                </MenuItemPhoto>
                <Label>Name</Label>
                <Input withCleaner value={name} onChange={e => setName(e.target.value)} onClear={() => setName('')}/>
                <Label>Price</Label>
                <Input withCleaner value={price} onChange={e => setPrice(e.target.value)} onClear={() => setPrice('')}/>
                <Label>Description</Label>
                <Textarea withCleaner value={description} changeHandler={e => setDescription(e.target.value)} onClear={() => setDescription('')}/>
                <Label>Cooking Time</Label>
                <Input withCleaner value={cookingTime} onChange={e => setCookingTime(e.target.value)} onClear={() => setCookingTime('')}/>
                <Label>Meal Size</Label>
                <Input withCleaner value={size} onChange={e => setSize(e.target.value)} onClear={() => setSize('')}/>
            </ContentContainer>
            <WideButton>Save</WideButton>
        </>
    );
}

export default EditMenuItem;
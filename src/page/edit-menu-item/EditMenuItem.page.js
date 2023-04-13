import {useNavigate} from "react-router-dom";
import {
    ContentContainer,

    Input,
    Label, PrimaryButton,
    RowSplitter,
    SecondaryButton,
    Textarea
} from '../../components/index'

import {MenuItemPhoto, ImagePlace} from './EditMenuItem.style';

import {URL} from "../../utils/config";
import {LOCAL_STORAGE_KEY, LocalStorage} from "../../utils/utils";
import React, {useState} from "react";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const { NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE } = menuItem;

    const [name, setName] = useState(NAME);
    const [price, setPrice] = useState(PRICE);
    const [description, setDescription] = useState(DESCRIPTION);
    const [cookingTime, setCookingTime] = useState(COOKING_TIME);
    const [imageURL, setImageURL] = useState(IMAGE_URL);
    const [size, setSize] = useState(SIZE);


    if (!menuItem && URL.EDIT_MENU) {
        return navigate(URL.SETTING)
    }

    return (
        <>
            <SecondaryButton><RemoveIcon/> Delete</SecondaryButton>
            <RowSplitter height={'15px'}/>
            <ContentContainer>
                <MenuItemPhoto>
                    {imageURL
                        ? <img src={imageURL} alt='Food'/>   // setImageURL
                        : <ImagePlace/>}
                    <SecondaryButton>{imageURL ? 'Change image' : 'Add image'}</SecondaryButton>
                </MenuItemPhoto>
                <Label>Name</Label>
                <Input withCleaner value={name} changeHandler={value =>setName(value)} clearHandler={() => setName('')}/>
                <Label>Price</Label>
                <Input withCleaner value={price} changeHandler={value =>setPrice(value)} clearHandler={() => setPrice('')}/>
                <Label>Description</Label>
                <Textarea withCleaner value={description} changeHandler={value =>setDescription(value)}
                          clearHandler={() => setDescription('')}/>
                <Label>Cooking Time</Label>
                <Input withCleaner value={cookingTime} changeHandler={value =>setCookingTime(value)}
                       clearHandler={() => setCookingTime('')}/>
                <Label>Meal Size</Label>
                <Input withCleaner value={size} changeHandler={value =>setSize(value)} clearHandler={() => setSize('')}/>
            </ContentContainer>
            {
                (
                    IMAGE_URL !== imageURL ||
                    NAME !== name ||
                    PRICE !== price ||
                    DESCRIPTION !== description ||
                    COOKING_TIME !== cookingTime ||
                    SIZE !== size
                ) && <PrimaryButton>Save</PrimaryButton>
            }
        </>
    );
}

export default EditMenuItemPage;
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
import React, {useCallback, useState} from "react";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItem;

    const [name, setName] = useState(NAME);
    const [price, setPrice] = useState(PRICE);
    const [description, setDescription] = useState(DESCRIPTION);
    const [cookingTime, setCookingTime] = useState(COOKING_TIME);
    const [size, setSize] = useState(SIZE);
    const [imageURL, setImageURL] = useState(IMAGE_URL);

    const nameChangeHandler = useCallback(setName, [name]);
    const nameClearHandler = useCallback(() => setName(''), [name]);

    const priceChangeHandler = useCallback(setPrice, [price]);
    const priceClearHandler = useCallback(() => setPrice(''), [price]);

    const descriptionChangeHandler = useCallback(setDescription, [description]);
    const descriptionClearHandler = useCallback(() => setDescription(''), [description]);

    const cookingTimeChangeHandler = useCallback(setCookingTime, [cookingTime]);
    const cookingTimeClearHandler = useCallback(() => setCookingTime(''), [cookingTime]);

    const sizeChangeHandler = useCallback(setSize, [size]);
    const sizeClearHandler = useCallback(() => setSize(''), [size]);

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
                <Input
                    value={name}
                    changeHandler={nameChangeHandler}
                    clearHandler={nameClearHandler}
                    withCleaner
                />
                <Label>Price</Label>
                <Input
                    value={price}
                    changeHandler={priceChangeHandler}
                    clearHandler={priceClearHandler}
                    withCleaner
                />
                <Label>Description</Label>
                <Textarea
                    value={description}
                    changeHandler={descriptionChangeHandler}
                    clearHandler={descriptionClearHandler}
                    withCleaner
                />
                <Label>Cooking time (in minutes)</Label>
                <Input
                    value={cookingTime}
                    type={'number'}
                    changeHandler={cookingTimeChangeHandler}
                    clearHandler={cookingTimeClearHandler}
                    withCleaner
                />
                <Label>Meal Size</Label>
                <Input
                    value={size}
                    type={'number'}
                    changeHandler={sizeChangeHandler}
                    clearHandler={sizeClearHandler}
                    withCleaner
                />
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
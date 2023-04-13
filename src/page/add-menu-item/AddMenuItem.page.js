import React, {useCallback, useState} from "react";

import {MenuItemPhoto, ImagePlace} from './AddMenuItem.style';

import {
    ContentContainer,
    Input,
    Label, PrimaryButton,
    RowSplitter,
    SecondaryButton,
    Textarea
} from '../../components/index'

const AddMenuItemPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [size, setSize] = useState();
    const [imageURL, setImageURL] = useState();

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

    return (
        <>
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
            <PrimaryButton>Add</PrimaryButton>
        </>
    );
}

export default AddMenuItemPage;
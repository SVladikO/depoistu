import React, {useState} from "react";

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
    const [imageURL, setImageURL] = useState('');
    const [size, setSize] = useState('');

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
            <PrimaryButton>Add</PrimaryButton>
        </>
    );
}

export default AddMenuItemPage;
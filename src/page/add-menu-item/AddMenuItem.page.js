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

import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

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
                <Input withCleaner value={name} onChange={e => setName(e.target.value)} onClear={() => setName('')}/>
                <Label>Price</Label>
                <Input withCleaner value={price} onChange={e => setPrice(e.target.value)} onClear={() => setPrice('')}/>
                <Label>Description</Label>
                <Textarea withCleaner value={description} changeHandler={e => setDescription(e.target.value)}
                          onClear={() => setDescription('')}/>
                <Label>Cooking Time</Label>
                <Input withCleaner value={cookingTime} onChange={e => setCookingTime(e.target.value)}
                       onClear={() => setCookingTime('')}/>
                <Label>Meal Size</Label>
                <Input withCleaner value={size} onChange={e => setSize(e.target.value)} onClear={() => setSize('')}/>
            </ContentContainer>
            <PrimaryButton>Add</PrimaryButton>
        </>
    );
}

export default AddMenuItemPage;
import React, {useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {MenuItemPhoto, ImagePlace} from './AddMenuItem.style';

import {
    ContentContainer,
    Input,
    Label, PrimaryButton,
    RowSplitter,
    SecondaryButton,
    Textarea
} from '../../components/index'
import {menu_item_validation} from "../../utils/validation";

const MenuItemSchema = Yup.object().shape(menu_item_validation);


const AddMenuItemPage = () => {

    const [imageURL, setImageURL] = useState();

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    description: '',
                    cookingTime: '',
                    size: ''
                }}
                validationSchema={MenuItemSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({values, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <RowSplitter height={'15px'}/>
                        <ContentContainer>
                            <MenuItemPhoto>
                                {imageURL
                                    ? <img src={imageURL} alt='Food'/>   // setImageURL
                                    : <ImagePlace/>}
                                <SecondaryButton type="button">{imageURL ? 'Change image' : 'Add image'}</SecondaryButton>
                            </MenuItemPhoto>
                            <Label>Name</Label>
                            <Input
                                value={values.name}
                                name="name"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                withCleaner
                                errorMessage={errors.name}
                            />
                            <Label>Price</Label>
                            <Input
                                value={values.price}
                                name="price"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price', '')}
                                withCleaner
                                errorMessage={errors.price}
                            />
                            <Label>Description</Label>
                            <Textarea
                                value={values.description}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('description', '')}
                                withCleaner
                                name="description"
                                errorMessage={errors.description}
                            />
                            <Label>Cooking time (in minutes)</Label>
                            <Input
                                value={values.cookingTime}
                                type="number"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('cookingTime', '')}
                                withCleaner
                                name="cookingTime"
                                errorMessage={errors.cookingTime}
                            />
                            <Label>Meal Size</Label>
                            <Input
                                value={values.size}
                                type="number"
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('size','')}
                                withCleaner
                                name="size"
                                errorMessage={errors.size}
                            />
                        </ContentContainer>
                        <PrimaryButton isWide type="submit">Add</PrimaryButton>
                    </form>
                    )}
            </Formik>
        </>
    );
}

export default AddMenuItemPage;
import React, {useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {ImagePlace, MenuItemPhoto} from "./menu-item-view.style";
import {ContentContainer, Input, Label, PrimaryButton, SecondaryButton, Textarea} from "../../components";
import validation from "../../utils/validation";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const MenuItemView = ({initialValue, onSubmit}) => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageURL, setImageURL] = useState(initialValue.imageURL);
    return (
        <Formik
            initialValues={initialValue}
            validationSchema={EditMenuItemSchema}
            onSubmit={ values => {
                setWasSubmitted(true);
                onSubmit(values)
            }}
        >
            {({values, handleBlur, touched,setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>

                    <ContentContainer>
                        <MenuItemPhoto>
                            {imageURL
                                ? <img src={imageURL} alt='Food'/>   // setImageURL
                                : <ImagePlace/>}
                            <SecondaryButton>{imageURL ? 'Change image' : 'Add image'}</SecondaryButton>
                        </MenuItemPhoto>
                        <Label>Name</Label>
                        <Input
                            value={values.name}
                            name="name"
                            onBlur={handleBlur}
                            isTouched={touched.name || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('name', '')}
                            errorMessage={errors.name}
                            withCleaner
                        />
                        <Label>Price</Label>
                        <Input
                            value={values.price}
                            name="price"
                            type="number"
                            onBlur={handleBlur}
                            isTouched={touched.price || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('price', '')}
                            errorMessage={errors.price}
                            withCleaner
                        />
                        <Label>Description</Label>
                        <Textarea
                            value={values.description}
                            name="description"
                            onBlur={handleBlur}
                            isTouched={touched.description || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('description', '')}
                            errorMessage={errors.description}
                            withCleaner
                        />
                        <Label>Cooking time (in minutes)</Label>
                        <Input
                            value={values.cookingTime}
                            type="number"
                            name="cookingTime"
                            onBlur={handleBlur}
                            isTouched={touched.cookingTime || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('cookingTime', '')}
                            errorMessage={errors.cookingTime}
                            withCleaner
                        />
                        <Label>Meal Size</Label>
                        <Input
                            value={values.size}
                            name="size"
                            type="number"
                            onBlur={handleBlur}
                            isTouched={touched.size || wasSubmitted}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('size', '')}
                            errorMessage={errors.size}
                            withCleaner
                        />
                    </ContentContainer>
                    <PrimaryButton type="submit" isWide>Save</PrimaryButton>
                </form>
            )}
        </Formik>
    )
}

export default MenuItemView;
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
import validation from "../../utils/validation";

const MenuItemSchema = Yup.object().shape(validation.menuItem);


const AddMenuItemPage = () => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
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
                    setWasSubmitted(true)
                }}
            >
                {({values, touched, setFieldValue, handleSubmit, handleBlur, handleChange, errors}) => (
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
                                name="name"
                                value={values.name}
                                errorMessage={errors.name}
                                isTouched={touched.name || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('name', '')}
                                withCleaner
                            />
                            <Label>Price</Label>
                            <Input
                                type="number"
                                name="price"
                                value={values.price}
                                errorMessage={errors.price}
                                isTouched={touched.price || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price', '')}
                                withCleaner
                            />
                            <Label>Description</Label>
                            <Textarea
                                name="description"
                                value={values.description}
                                errorMessage={errors.description}
                                isTouched={touched.description || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('description', '')}
                                withCleaner
                            />
                            <Label>Cooking time (in minutes)</Label>
                            <Input
                                type="number"
                                name="cookingTime"
                                value={values.cookingTime}
                                errorMessage={errors.cookingTime}
                                isTouched={touched.cookingTime || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('cookingTime', '')}
                                withCleaner
                            />
                            <Label>Meal Size</Label>
                            <Input
                                type="number"
                                name="size"
                                value={values.size}
                                errorMessage={errors.size}
                                isTouched={touched.size || wasSubmitted}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('size','')}
                                withCleaner
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
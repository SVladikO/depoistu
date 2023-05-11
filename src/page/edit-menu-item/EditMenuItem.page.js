import {useNavigate} from "react-router-dom";
import {Formik} from "formik";
import * as Yup from 'yup';
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
import validation from "../../utils/validation";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItem;
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageURL, setImageURL] = useState(IMAGE_URL);

    if (!menuItem && URL.EDIT_MENU) {
        return navigate(URL.SETTING)
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: NAME,
                    price: PRICE,
                    description: DESCRIPTION,
                    cookingTime: COOKING_TIME,
                    size: SIZE
                }}
                validationSchema={EditMenuItemSchema}
                onSubmit={values => {
                    console.log(values);
                    setWasSubmitted(true);
                }}
            >
                {({values, handleBlur, touched,setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
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
        </>
    );
}

export default EditMenuItemPage;
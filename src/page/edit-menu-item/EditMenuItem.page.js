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

const EditMenuItemSchema = Yup.object().shape({
    name: Yup.string()
        .required("Required!")
        .min(2, "Min length 2!")
        .max(30, "Max length 30!"),
    price: Yup.string()
        .required('Required!')
        .min(1, 'Min length 1!')
        .max(5, 'Max length 5!'),
    description: Yup.string()
        .max(100, 'Max length 100!'),
    cookingTime: Yup.string()
        .min(1, 'Min length 1!')
        .max(2, 'Max length 2!'),
    size: Yup.string()
        .min(2, 'Min length 2!')
        .max(4, 'Max length 4!')
});

const EditMenuItemPage = () => {
    const navigate = useNavigate();
    const menuItem = LocalStorage.get(LOCAL_STORAGE_KEY.MENU_ITEM_CANDIDATE_TO_EDIT);
    const {NAME, PRICE, DESCRIPTION, COOKING_TIME, IMAGE_URL, SIZE} = menuItem;

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
                }}
            >
                {({values, setFieldValue, handleSubmit, handleChange, errors}) => (
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
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price', '')}
                                errorMessage={errors.price}
                                withCleaner
                            />
                            <Label>Description</Label>
                            <Textarea
                                value={values.description}
                                name="description"
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
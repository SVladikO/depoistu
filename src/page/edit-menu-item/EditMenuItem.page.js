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
import React, {useCallback, useState} from "react";
import {ReactComponent as RemoveIcon} from "../../icons/remove_icon.svg";

const EditMenuItemSchema = Yup.object().shape({
    name: Yup.string()
        .required("enter the name!")
        .min(2, "Too Short!")
        .max(30, "Too Long!"),
    price: Yup.number()
        .required('enter the price')
        .min(1, 'one is minimum')
        .max(30, 'too much!'),
    description: Yup.string()
        .max(100, 'too much symbols'),
    cookingTime: Yup.number()
        .max(3, 'very long!'),
    size: Yup.number()
        .max(4, 'very huge!')
});


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
            <Formik
                initialValues={{
                    name: '',
                    price: 0,
                    description: '',
                    cookingTime: 0,
                    size: 0
                }}
                validationSchema={EditMenuItemSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({values, handleSubmit, handleChange, errors, touched}) => (
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
                                type="text"
                                changeHandler={handleChange}
                                withCleaner
                            />
                            {errors.name && touched.name && <div>{errors.name}</div>}
                            <Label>Price</Label>
                            <Input
                                value={values.price}
                                name="price"
                                type="number"
                                changeHandler={handleChange}
                                withCleaner
                                min="0"
                            />
                            {errors.price && touched.price && <div>{errors.price}</div>}
                            <Label>Description</Label>
                            <Textarea
                                value={values.description}
                                name="description"
                                changeHandler={handleChange}
                                withCleaner
                                as="textarea"
                            />
                            {errors.description && touched.description && <div>{errors.description}</div>}
                            <Label>Cooking time (in minutes)</Label>
                            <Input
                                value={values.cookingTime}
                                type="number"
                                name="cookingTime"
                                changeHandler={handleChange}
                                withCleaner
                                min="0"
                            />
                            {errors.cookingTime && touched.cookingTime && <div>{errors.cookingTime}</div>}
                            <Label>Meal Size</Label>
                            <Input
                                value={values.size}
                                name="size"
                                type="number"
                                changeHandler={handleChange}
                                withCleaner
                                min="0"
                            />
                            {errors.size && touched.size && <div>{errors.size}</div>}
                        </ContentContainer>
                        {
                            (
                                IMAGE_URL !== imageURL ||
                                NAME !== name ||
                                PRICE !== price ||
                                DESCRIPTION !== description ||
                                COOKING_TIME !== cookingTime ||
                                SIZE !== size
                            ) && <PrimaryButton type="submit" isWide>Save</PrimaryButton>
                        }
                    </form>
                )}
            </Formik>
        </>
    );
}

export default EditMenuItemPage;
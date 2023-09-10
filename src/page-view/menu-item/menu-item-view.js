import React, {useMemo, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {ImagePlace, MenuItemPhoto} from "./menu-item-view.style";
import {Dropdown,ContentContainer, Input, Label, SecondaryButton, Textarea} from "components";

import validation from "utils/validation";
import {CATEGORY_ID_MAPPER_AS_OBJECT, CATEGORY_MAPPER_AS_ARRAY} from "utils/category";
import {translate, TRANSLATION} from "utils/translation";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const MenuItemView = ({initialValue, onSubmit, children}) => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageURL] = useState(initialValue.imageURL);
    const options  = useMemo(() => Object.values(CATEGORY_MAPPER_AS_ARRAY).map(({id,title}) => ({value: id, title})),[initialValue])

    const renderImages = () => (
        <MenuItemPhoto>
            {imageURL
                ? <img src={imageURL} alt='Food'/>   // setImageURL
                : <ImagePlace/>}
            <SecondaryButton>
                {imageURL
                    ? translate(TRANSLATION.PAGE_VIEW.MENU_ITEM.BUTTON.CHANGE_IMAGE)
                    : translate(TRANSLATION.PAGE_VIEW.MENU_ITEM.BUTTON.ADD_IMAGE)
                }
            </SecondaryButton>
        </MenuItemPhoto>
    );

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={EditMenuItemSchema}
            onSubmit={values => {
                setWasSubmitted(true);
                onSubmit(values)
            }}
        >
            {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer>
                        {/*{renderImages()}*/}
                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.CATEGORY)}</Label>
                        <Dropdown
                            options={options}
                            selectedOption={(options.filter(o => o.value === values.categoryId))[0]}
                            onSelect={option => setFieldValue( 'categoryId', +option.value)}
                            as="select"
                            name="categoryId"
                            isTouched={touched.category_id || wasSubmitted}
                            errorMessage={errors.category_id}
                        />
                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.NAME)}</Label>
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
                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.PRICE)}</Label>
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

                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.DESCRIPTION)}</Label>
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
                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.COOKING_TIME)}</Label>
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
                        <Label>{translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE)} {CATEGORY_ID_MAPPER_AS_OBJECT[values.categoryId].measurement}</Label>
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
                    {children}
                </form>
            )}
        </Formik>
    )
}

export default MenuItemView;
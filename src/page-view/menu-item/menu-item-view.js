import React, {useMemo, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {ImagePlace, MenuItemPhoto} from "./menu-item-view.style";
import {Dropdown,ContentContainer, Input, Label, SecondaryButton, Textarea} from "components";

import validation from "utils/validation";
import {CATEGORY_ID_MAPPER_AS_OBJECT, CATEGORY_MAPPER_AS_ARRAY} from "utils/category";
import {translate, TRANSLATION} from "utils/translation";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const MenuItemView = ({defaultInitialValue, onSubmit, children}) => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageURL] = useState(defaultInitialValue.imageURL);
    const [initialValues, setInitValues] = useState(defaultInitialValue);
    const options  = useMemo(() => CATEGORY_MAPPER_AS_ARRAY.map(({id,title}) =>
        ({
            value: id,
            title: translate(title)
        })),[])

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
            enableReinitialize
            initialValues={initialValues}
            validationSchema={EditMenuItemSchema}
            onSubmit={values => {
                setWasSubmitted(true);
                onSubmit(values)
                setInitValues({categoryId: values.categoryId, ...defaultInitialValue})
            }}
        >
            {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer noShadow>
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
                        <Input
                            value={values.name}
                            name="name"
                            onBlur={handleBlur}
                            labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.NAME)}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('name', '')}
                            isTouched={touched.name || wasSubmitted}
                            errorMessage={errors.name}
                            withCleaner
                        />
                        <Input
                            value={values.price}
                            name="price"
                            type="number"
                            labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.PRICE)}
                            onBlur={handleBlur}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('price', '')}
                            isTouched={touched.price || wasSubmitted}
                            errorMessage={errors.price}
                            withCleaner
                        />

                        <Textarea
                            labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.DESCRIPTION)}
                            value={values.description}
                            name="description"
                            onBlur={handleBlur}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('description', '')}
                            isTouched={touched.description || wasSubmitted}
                            errorMessage={errors.description}
                            withCleaner
                        />
                        <Input
                            value={values.cookingTime}
                            type="number"
                            name="cookingTime"
                            labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.COOKING_TIME)}
                            onBlur={handleBlur}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('cookingTime', '')}
                            isTouched={touched.cookingTime || wasSubmitted}
                            errorMessage={errors.cookingTime}
                            withCleaner
                        />
                        <Input
                            value={values.size}
                            name="size"
                            type="text"
                            labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE)}
                            onBlur={handleBlur}
                            changeHandler={handleChange}
                            clearHandler={() => setFieldValue('size', '')}
                            isTouched={touched.size || wasSubmitted}
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
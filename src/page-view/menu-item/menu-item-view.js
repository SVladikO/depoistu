import React, {useMemo, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {GroupSizePrice, ImagePlace, MenuItemPhoto} from "./menu-item-view.style";
import {Dropdown, ContentContainer, Input, SecondaryButton, Textarea} from "components";

import validation from "utils/validation";
import {CATEGORY_MAPPER_AS_ARRAY} from "utils/category";
import {translate, TRANSLATION} from "utils/translation";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const MenuItemView = ({defaultInitialValue, onSubmit, children}) => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageURL] = useState(defaultInitialValue.imageURL);
    const CATEGORY_ID_MEASUREMENTS = useMemo(() => {
            const mapper = {};
            CATEGORY_MAPPER_AS_ARRAY.map(({id, measurement}) => mapper[id] = measurement);
            return mapper;
        }
    )

    const getMeasurements = id => id ? translate(CATEGORY_ID_MEASUREMENTS[id]) : ' ';

    const options = useMemo(() => CATEGORY_MAPPER_AS_ARRAY.map(({id, title}) =>
        ({
            value: id,
            title: translate(title)
        })), [])

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
            initialValues={defaultInitialValue}
            validationSchema={EditMenuItemSchema}
            onSubmit={values => {
                setWasSubmitted(true);
                onSubmit(values)
            }}
        >
            {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                <form onSubmit={handleSubmit}>
                    <ContentContainer noShadow>
                        {/*{renderImages()}*/}
                        <Dropdown
                            label={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.CATEGORY)}
                            options={options}
                            selectedOption={(options.filter(o => o.value === values.categoryId))[0]}
                            onSelect={option => setFieldValue('categoryId', +option.value)}
                            as="select"
                            name="categoryId"
                            isTouched={touched.categoryId || wasSubmitted}
                            errorMessage={errors.categoryId}
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
                        <GroupSizePrice>
                            <Input
                                name="size_1"
                                type="number"
                                value={values.size_1}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 1 ${getMeasurements(values.categoryId)}`}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('size_1', '')}
                                isTouched={touched.size_1 || wasSubmitted}
                                errorMessage={errors.size_1}
                                withCleaner
                            />
                            <Input
                                name="price_1"
                                type="number"
                                value={values.price_1}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.PRICE) + ' 1'}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price_1', '')}
                                isTouched={touched.price_1 || wasSubmitted}
                                errorMessage={errors.price_1}
                                withCleaner
                            />
                        </GroupSizePrice>

                        <GroupSizePrice>
                            <Input
                                name="size_2"
                                type="number"
                                value={values.size_2}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 2 ${getMeasurements(values.categoryId)}`}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('size_2', '')}
                                isTouched={touched.size_2 || wasSubmitted}
                                errorMessage={errors.size_2}
                                withCleaner
                            />
                            <Input
                                name="price_2"
                                type="number"
                                value={values.price_2}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.PRICE) + ' 2'}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price_2', '')}
                                isTouched={touched.price_2 || wasSubmitted}
                                errorMessage={errors.price_2}
                                withCleaner
                            />
                        </GroupSizePrice>

                        <GroupSizePrice>
                            <Input
                                name="size_3"
                                type="number"
                                value={values.size_3}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 3 ${getMeasurements(values.categoryId)}`}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('size_3', '')}
                                isTouched={touched.size_3 || wasSubmitted}
                                errorMessage={errors.size_3}
                                withCleaner
                            />
                            <Input
                                name="price_3"
                                type="number"
                                value={values.price_3}
                                labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.PRICE) + ' 3'}
                                onBlur={handleBlur}
                                changeHandler={handleChange}
                                clearHandler={() => setFieldValue('price_3', '')}
                                isTouched={touched.price_3 || wasSubmitted}
                                errorMessage={errors.price_3}
                                withCleaner
                            />
                        </GroupSizePrice>
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

                    </ContentContainer>
                    {children}
                </form>
            )}
        </Formik>
    )
}

export default MenuItemView;
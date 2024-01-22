import React, {useMemo, useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';

import {GroupSizePrice} from "./menu-item-view.style";
import {
    Dropdown,
    ContentContainer,
    Input,
    Textarea,
    ImageUploaderButton,
    ImageWithDelete,
    RowSplitter,
    PrimaryButton
} from "components";

import validation from "utils/validation";
import {CATEGORY_MAPPER_AS_ARRAY} from "utils/category";
import {translate, TRANSLATION} from "utils/translation";
import ImageUrlFormatter from "../../utils/image.utils";

const EditMenuItemSchema = Yup.object().shape(validation.menuItem);

const MenuItemView = ({defaultInitialValue, onSubmit, submitButtonTitle, isLoading,}) => {
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [imageUrl, setImageUrl] = useState(defaultInitialValue.imageUrl);

    const CATEGORY_ID_MEASUREMENTS = useMemo(() => {
            const mapper = {};
            CATEGORY_MAPPER_AS_ARRAY.map(({id, measurement}) => mapper[id] = measurement);
            return mapper;
        }
    )

    const getMeasurements = id => id ? translate(CATEGORY_ID_MEASUREMENTS[id]) : ' ';

    const options = useMemo(() => CATEGORY_MAPPER_AS_ARRAY.map(({id, title, isGroupTitle}) =>
        ({
            value: id,
            title: translate(title),
            isGroupTitle,
        })), [])

    const onImageUpload = info => setImageUrl(info.secure_url);

    return (
        <div>
            {imageUrl
                ? (
                    <div>
                        <ImageWithDelete
                            src={ImageUrlFormatter.formatForMenuItemBig(imageUrl)}
                            onDelete={() => setImageUrl('')}/>
                    </div>
                )
                : (
                    <div>
                        <ImageUploaderButton onImageUpload={onImageUpload}/>
                        <RowSplitter height="20px"/>
                    </div>
                )
            }

            <Formik
                enableReinitialize
                initialValues={defaultInitialValue}
                validationSchema={EditMenuItemSchema}
                onSubmit={values => {
                    setWasSubmitted(true);
                    onSubmit({...values, imageUrl})
                }}
            >
                {({values, handleBlur, touched, setFieldValue, handleSubmit, handleChange, errors}) => (
                    <form onSubmit={handleSubmit}>
                        <ContentContainer noShadow>
                            <Dropdown
                                label={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.CATEGORY)}
                                options={options}
                                selectedOption={(options.filter(o => o.value === values.category_id))[0]}
                                onSelect={option => setFieldValue('category_id', +option.value)}
                                as="select"
                                name="category_id"
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
                            <GroupSizePrice>
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
                                <Input
                                    name="size_1"
                                    value={values.size_1}
                                    labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 1 ${getMeasurements(values.category_id)}`}
                                    onBlur={handleBlur}
                                    changeHandler={handleChange}
                                    clearHandler={() => setFieldValue('size_1', '')}
                                    isTouched={touched.size_1 || wasSubmitted}
                                    errorMessage={errors.size_1}
                                    withCleaner
                                />
                            </GroupSizePrice>

                            <GroupSizePrice>
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
                                <Input
                                    name="size_2"
                                    value={values.size_2}
                                    labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 2 ${getMeasurements(values.category_id)}`}
                                    onBlur={handleBlur}
                                    changeHandler={handleChange}
                                    clearHandler={() => setFieldValue('size_2', '')}
                                    isTouched={touched.size_2 || wasSubmitted}
                                    errorMessage={errors.size_2}
                                    withCleaner
                                />
                            </GroupSizePrice>

                            <GroupSizePrice>
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
                                <Input
                                    name="size_3"
                                    value={values.size_3}
                                    labelName={translate(TRANSLATION.INPUT_LABEL.MENU_ITEM.MEAL_SIZE) + ` 3 ${getMeasurements(values.category_id)}`}
                                    onBlur={handleBlur}
                                    changeHandler={handleChange}
                                    clearHandler={() => setFieldValue('size_3', '')}
                                    isTouched={touched.size_3 || wasSubmitted}
                                    errorMessage={errors.size_3}
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
                        <RowSplitter height="10px"/>
                        <PrimaryButton
                            isWide
                            type="submit"
                            isLoading={isLoading}
                            withPadding
                        >
                            {submitButtonTitle}
                        </PrimaryButton>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default MenuItemView;
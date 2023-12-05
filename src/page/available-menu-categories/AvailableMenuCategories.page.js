import React from 'react';
import {GroupTitle, Table, TD} from "./AvailableMenuCategories.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_BAR, CATEGORY_DESSERTS, CATEGORY_DRINKS, CATEGORY_HOT_DRINKS, CATEGORY_KITCHEN, CATEGORY_SUSHI, CATEGORY_HOOKAH} from "utils/category";

const AvailableMenuCategoriesPage = () => {
    useScrollUp();

    const renderGroup = groupTitle =>
        <tr>
            <td colSpan={2} style={{padding: "10px 0"}}>
                <GroupTitle>{groupTitle}</GroupTitle>
            </td>
        </tr>

    const render = categories =>
        categories.map(
            (category, index) => (
                <tr key={category.title + index}>
                    <TD>{translate(category.title)}</TD>
                    <TD>{translate(category.measurement)}</TD>
                </tr>
            ))


    return (
        <>
            <Table>
                <tbody>
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.KITCHEN))}
                {render(CATEGORY_KITCHEN)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.SUSHI))}
                {render(CATEGORY_SUSHI)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.DESSERTS))}
                {render(CATEGORY_DESSERTS)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.DRINKS))}
                {render(CATEGORY_DRINKS)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.HOT_DRINKS))}
                {render(CATEGORY_HOT_DRINKS)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.BAR))}
                {render(CATEGORY_BAR)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.HOOKAH))}
                {render(CATEGORY_HOOKAH)}
                </tbody>
            </Table>
        </>
    )

};

export default AvailableMenuCategoriesPage;
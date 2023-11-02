import React from 'react';
import {Wrapper, Table} from "./AvailableMenuCategories.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_BAR, CATEGORY_DESSERTS, CATEGORY_HOT_DRINKS, CATEGORY_KITCHEN, CATEGORY_SUSHI} from "utils/category";

const AvailableMenuCategoriesPage = () => {
    useScrollUp();

    const renderGroup = groupTitle =>
        <tr>
            <td colSpan={2} style={{padding: "10px 0"}}>
                <h2 style={{textAlign: 'center'}}>{groupTitle}</h2>
            </td>
        </tr>

    const render = categories =>
        categories.map(
            (category, index) => (
                <tr key={category.title + index}>
                    <td style={{padding: '4px'}}>{translate(category.title)}</td>
                    <td style={{padding: '4px'}}>{translate(category.measurement)}</td>
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
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.HOT_DRINKS))}
                {render(CATEGORY_HOT_DRINKS)}
                {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.BAR))}
                {render(CATEGORY_BAR)}
                </tbody>
            </Table>
        </>
    )

};

export default AvailableMenuCategoriesPage;
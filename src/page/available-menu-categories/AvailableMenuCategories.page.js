import React from 'react';
import {Wrapper, Title, Description} from "./AvailableMenuCategories.page.style";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_BAR, CATEGORY_DESSERTS, CATEGORY_HOT_DRINKS, CATEGORY_KITCHEN} from "utils/category";

const AvailableMenuCategoriesPage = () => {
    useScrollUp();

    const renderCategoryTranslations = () => {
        const renderGroup = groupTitle =>
            <tr>
                <td style={{padding: "20px 0 10px"}}>
                    <h2 style={{textAlign: 'center'}}>{groupTitle}</h2>
                </td>
            </tr>

        const render = categories =>
            categories.map(
                category => (
                    <tr>
                        <td style={{padding: '4px'}}>{translate(category.title)}</td>
                        <td style={{padding: '4px'}}>{translate(category.measurement)}</td>
                    </tr>
                ))


        return (
            <div>
                <table style={{margin: '0 auto'}}>
                    <tbody>
                    {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.KITCHEN))}
                    {render(CATEGORY_KITCHEN)}
                    {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.DESSERTS))}
                    {render(CATEGORY_DESSERTS)}
                    {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.HOT_DRINKS))}
                    {render(CATEGORY_HOT_DRINKS)}
                    {renderGroup(translate(TRANSLATION.TOP_CATEGORIES.BAR))}
                    {render(CATEGORY_BAR)}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <Wrapper>
            {renderCategoryTranslations()}
        </Wrapper>
    )
};

export default AvailableMenuCategoriesPage;
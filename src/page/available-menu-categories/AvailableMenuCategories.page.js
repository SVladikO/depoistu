import React from 'react';
import {GroupTitle, Table, TD} from "./AvailableMenuCategories.page.style";

import {useScrollUp} from "utils/hook";
import {translate} from "utils/translation";
import {

    CATEGORY_MAPPER_AS_ARRAY
} from "utils/category";

const AvailableMenuCategoriesPage = () => {
    useScrollUp();

    const renderGroup = groupTitle =>
        <tr>
            <td colSpan={2} style={{padding: "10px 0"}}>
                <GroupTitle>{groupTitle}</GroupTitle>
            </td>
        </tr>

    const render = (category, index) => (
        <tr key={category.title + index}>
            <TD>{translate(category.title)}</TD>
            <TD>{translate(category.measurement)}</TD>
        </tr>
    )

    return (
        <>
            <Table>
                <tbody>
                {CATEGORY_MAPPER_AS_ARRAY.map(category =>
                    category.isGroupTitle
                        ? renderGroup(translate(category.title))
                        : render(category)
                )
                }
                </tbody>
            </Table>
        </>
    )

};

export default AvailableMenuCategoriesPage;
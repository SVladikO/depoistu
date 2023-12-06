import React from 'react';
import {GroupTitle, Table, TD} from "./AvailableMenuCategories.page.style";

import {ContentContainer, RowSplitter} from "components";
import {NotificationInfo} from "components/Notification/Notification";

import {useScrollUp} from "utils/hook";
import {translate, TRANSLATION} from "utils/translation";
import {CATEGORY_MAPPER_AS_ARRAY} from "utils/category";

import {hexToRgbA} from "utils/theme";

const AvailableMenuCategoriesPage = () => {
    useScrollUp();

    const renderGroup = groupTitle =>
        <tr key={groupTitle}>
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
                {CATEGORY_MAPPER_AS_ARRAY.map((category, index) =>
                    category.isGroupTitle
                        ? renderGroup(translate(category.title))
                        : render(category, index)
                )
                }
                </tbody>
            </Table>
            <RowSplitter height={'20px'} />
            <ContentContainer noShadow bg={hexToRgbA('#000', 0.5)}>
                <NotificationInfo >
                    {translate(TRANSLATION.PAGE.AVAILABLE_MENU_CATEGORIES.HINT)}
                </NotificationInfo>
            </ContentContainer>
        </>
    )

};

export default AvailableMenuCategoriesPage;
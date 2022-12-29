const schema_name = 'root'

const TABLE_NAME = {
    MENU_ITEM: `${schema_name}.menu_item`,
}

const QUERY = {
    MENU_ITEM: {
        SELECT_ALL_BY_COMPANY_ID: companyId => `select *from ${TABLE_NAME.MENU_ITEM} where company_id = ${companyId}`,

        SELECT_ALL_BY_COMPANY_ID_AND_BY_CATEGORY_ID: (companyId, categoryId) =>
            `select * from ${TABLE_NAME.MENU_ITEM} where category_id = ${categoryId} and company_id = ${companyId}`,
    }
}

module.exports = QUERY;
const schema_name = 'root'

const TABLE_NAME = {
    MENU_ITEM: `${schema_name}.menu_item`,
}

const QUERY = {
    MENU_ITEM: {
        SELECT_ALL: `select * from ${TABLE_NAME.MENU_ITEM}`,
        SELECT_ALL_BY_COMPANY_ID_AND_BY_CATEGORY_ID: `select * from ${TABLE_NAME.MENU_ITEM} where category_id = 1 and company_id = 1`,
    }
}


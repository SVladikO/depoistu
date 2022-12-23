-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work

CREATE SCHEMA root;

CREATE TABLE root.MENU_ITEM(
    ID SERIAL NOT NULL,
    CATEGORY_ID INT     NOT NULL,
    COMPANY_ID  INT     NOT NULL,
    NAME           TEXT NOT NULL,
    INGREDIENTS    TEXT,
    PRICE_SIZE     TEXT
);

INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 2', '1, 2, 3, 4, 5', 's_132g_112_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 4', '1, 2, 3, 4, 5', 's_134g_114_uah|m_205g_145_uah|l_205g_145_uah' );

SELECT * FROM root.menu_item;
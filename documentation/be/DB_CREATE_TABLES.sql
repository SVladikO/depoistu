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

-- BAKERY (10)
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' ),










-- BEVERAGE (15)
(DEFAULT, 2, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),








-- BURGER (11)
(DEFAULT, 3, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),












-- NOODLES (6)
(DEFAULT, 4, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),















-- PIZZA (12)
(DEFAULT, 5, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),













-- SANDWITCH (3)
(DEFAULT, 6, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),






-- SEA FOOD (8)
(DEFAULT, 7, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),








-- VAGETABLE (7)
(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),











(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );

SELECT * FROM root.menu_item;
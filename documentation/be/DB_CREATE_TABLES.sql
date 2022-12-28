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
-- BAKERY (1/10)
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 1, 1, 'Cheese 1', '1, 2, 3, 4, 5', 's_131g_111_uah|m_205g_145_uah|l_205g_145_uah' );


INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES

-- BEVERAGE (2/15)
(DEFAULT, 2, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 2, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 2, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 2, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),


INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- BURGER (3/11)
(DEFAULT, 3, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 3, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 3, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );




INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES

-- NOODLES (4/6)
(DEFAULT, 4, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 4, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 4, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 4, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );


INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- PIZZA (5/15)
(DEFAULT, 5, 1, '4 cheese', 'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Burger', 'Meat Ball, Cheddar, Bacon, Mozzarella, Pickled cucumber, Tomato, Burger sauce, Tomato sauce (base), Red onion', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Cola BBQ', 'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Bavarian', 'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Bayraktar', 'mozzarella, salam Pepperoni, tomato sauce (base), champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Javelin', 'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Firmova', 'balik, bacon, ham, grilled chicken, mozzarella, bell pepper, pepperoni salami, tomato sauce (base)', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Hawaiian', 'pineapple, smoked chicken, mozzarella, tomato sauce (base)', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Mushroom', 'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Italian', 'Dor bleu, sun-dried tomatoes, capers, Halal grilled chicken, mozzarella, Alfredo cream sauce (base), champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Kebab Grill', ' Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'BBQ chicken', 'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Marinara', 'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Sicilian', 'grilled chicken, mozzarella, tomato sauce (base), champignons', 's_113|m_145|l_200' ),
(DEFAULT, 5, 1, 'Philadelphia', 'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon', 's_113|m_145|l_200' );



INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- SANDWITCH (6/3)
(DEFAULT, 6, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 6, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 6, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 6, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );



INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- SEA FOOD (7/8)
(DEFAULT, 7, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 7, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 7, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 7, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );



INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- VAGETABLE (8/9)
(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' ),
(DEFAULT, 8, 1, 'Cheese 3', '1, 2, 3, 4, 5', 's_133g_113_uah|m_205g_145_uah|l_205g_145_uah' );


SELECT * FROM root.menu_item;
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
(DEFAULT, 1, 1, 'Chocolate muffin', 'muffin, chocolate drops, whipped cream', 's_113|m_145|l_200' ),
(DEFAULT, 1, 1, 'Vanilla muffin', 'muffin, white chocolate drops, whipped cream', 's_113|m_145|l_200' ),
(DEFAULT, 1, 1, 'Strawberry muffin', 'muffin, strawberry jam, whipped cream', 's_113|m_145|l_200' ),
(DEFAULT, 1, 1, 'Vanilla croissant', 'croissant, vanilla cream, mint leaf, powdered sugar', 's_113|m_145|l_200' ),
(DEFAULT, 1, 1, 'Chocolate croissant', 'croissant, chocolate cream, powdered sugar', 's_113|m_145|l_200' ),
(DEFAULT, 1, 1, 'Raspberry croissant', 'croissant, raspberry jam, powdered sugar', 's_113|m_145|l_200' );


INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES

-- BEVERAGE (2/15)
(DEFAULT, 2, 1, 'BonAqua carbonated water', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'BonAqua water', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Coca-Cola', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Fanta', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Sprite', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Leffe Brune', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Black tea', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Green tea', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Fruit tea', '1, 2, 3, 4, 5', 's_113|m_145|l_200' ),
(DEFAULT, 2, 1, 'Jasmin tea', '1, 2, 3, 4, 5', 's_113|m_145|l_200' );


INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- BURGER (3/11)
(DEFAULT, 3, 1, 'CheeseBurger', 'burger bun, mayonnaise, spinach, red onion, cheddar cheese', 's_113|m_145|l_200' ),
(DEFAULT, 3, 1, 'BeefBurger', 'burger bun, beef steak, argula, tomato, grilled champignon, cheddar cheese', 's_113|m_145|l_200' ),
(DEFAULT, 3, 1, 'ChickenBurger', 'burger bun, chicken steak, jalapeno, cucumber, bacon, cheddar cheese', 's_113|m_145|l_200' ),
(DEFAULT, 3, 1, 'FishBurger', 'burger bun, fish steak, mustard, pickled cucumber, lettuce, cheddar cheese', 's_113|m_145|l_200' ),
(DEFAULT, 3, 1, 'ChorizoBurger', 'burger bun, chorizo, ketchup, paprika, fried egg, cheddar cheese', 's_113|m_145|l_200' );




INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES

-- NOODLES (4/6)
(DEFAULT, 4, 1, 'VegNoodles', 'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water', 's_113|m_145|l_200' );


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
(DEFAULT, 6, 1, 'Sandwich with cheese', 'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese', 's_113|m_145|l_200' ),
(DEFAULT, 6, 1, 'Sandwich with chicken', 'plain bread, ketchup, lettuce, grilled chicken, cucumber', 's_113|m_145|l_200' ),
(DEFAULT, 6, 1, 'Sandwich with salmon', 'plain bread, mayonnaise, lettuce, salmon, avocado', 's_113|m_145|l_200' );



INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- SEA FOOD (7/8)
(DEFAULT, 7, 1, 'Boiled shrimps', 'boiled shrimps, dill, salt, pepper', 's_113|m_145|l_200' ),
(DEFAULT, 7, 1, 'Ouster', 'ouster, lemon, ise', 's_113|m_145|l_200' ),
(DEFAULT, 7, 1, 'Sea salad', 'boiled shrimps, mussels, squid, octopus, garlic sauce, teriyaki sauce', 's_113|m_145|l_200' ),
(DEFAULT, 7, 1, 'Grilled salmon', 'grilled salmon, lemon, olive oil, salt, pepper, rosemary', 's_113|m_145|l_200' );



INSERT INTO root.MENU_ITEM
(id, category_id, company_id, name, ingredients, price_size) VALUES
-- VEGETABLE (8/9)
(DEFAULT, 8, 1, 'Boiled corn', 'boiled corn, salt, butter,', 's_113|m_145|l_200' ),
(DEFAULT, 8, 1, 'Mixed green salad', 'romaine lettuce, cucumber, cherry tomatoes, red onion, olive oil, salt, pepper', 's_113|m_145|l_200' ),
(DEFAULT, 8, 1, 'Spring salad', 'arugula, tomatoes, cucumber, green onion, dill, olive oil, vinegar', 's_113|m_145|l_200' ),
(DEFAULT, 8, 1, 'grilled vegetables', 'paprika, potato, zucchini, asparagus', 's_113|m_145|l_200' );


CREATE TABLE root.GUEST(
    ID SERIAL               NOT NULL,
    NAME              TEXT  NOT NULL,
    PHONE             INT   NOT NULL,
    PASSWORD          TEXT     NOT NULL,
    EMAIL             TEXT,
    IS_VERIFIED_PHONE BOOLEAN,
    IS_VERIFIED_EMAIL BOOLEAN,
    JOIN_DATE         INT

);


INSERT INTO root.GUEST
(id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES

(DEFAULT, 'Vlad', 970668830, 'vv11vv', 'vlad_S@gmail.com', false, false, 167233 ),
(DEFAULT, 'Irina', 635957376, 'ii22ii', 'irina_S@gmail.com', false, false, 167234),
(DEFAULT, 'David', 972959897, 'dd33dd', 'david_Y@gmail.com', false, false, 167235);
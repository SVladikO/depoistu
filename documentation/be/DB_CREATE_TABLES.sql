-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work

CREATE SCHEMA root;

CREATE TABLE root.MENU_ITEM
(
    ID          SERIAL NOT NULL,
    CATEGORY_ID INT    NOT NULL,
    COMPANY_ID  INT    NOT NULL,
    NAME        TEXT   NOT NULL,
    IMAGE_URL   TEXT   NOT NULL,
--     LIKED       INT    NOT NULL,   -- show liked in sub_category
--     TIME_PREPARATION INT    NOT NULL,
--     IS_HIDDEN  BOOLEAN,            -- instead of deleting owner can hide
    INGREDIENTS TEXT,
    PRICE_SIZE  TEXT
);

CREATE TABLE root.GUEST
(
    ID                SERIAL NOT NULL,
    NAME              TEXT   NOT NULL,
    PHONE             INT    NOT NULL,
    PASSWORD          TEXT   NOT NULL,
    EMAIL             TEXT,
    IS_VERIFIED_PHONE BOOLEAN,
    IS_VERIFIED_EMAIL BOOLEAN,
    JOIN_DATE         INT,
    LIKED_MENU_ITEMS   TEXT
);

CREATE TABLE root.COMPANY
(
    ID        SERIAL NOT NULL,
    NAME      TEXT   NOT NULL,
    PHONE     INT    NOT NULL,
    CITY      TEXT   NOT NULL,
    EMAIL     TEXT,
    JOIN_DATE TEXT,
    SCHEDULE  TEXT
);

CREATE TABLE root.HISTORY
(
    ID            SERIAL NOT NULL,
    GUEST_ID      INT    NOT NULL,
    COMPANY_ID    INT    NOT NULL,
    ORDER_DETAILS TEXT,
    DATE_TIME     TEXT,
    IS_PAID       BOOLEAN,
    IS_PREPARED   BOOLEAN
);

INSERT INTO root.MENU_ITEM (id, category_id, company_id, name, ingredients, image_url, price_size) VALUES
-- BAKERY (1/10)
(DEFAULT, 1, 1, 'Chocolate muffin', 'muffin, chocolate drops, whipped cream', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png', '200_45'),
(DEFAULT, 1, 1, 'Vanilla muffin', 'muffin, white chocolate drops, whipped cream', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png', '200_45'),

-- BEVERAGE (2/15)
(DEFAULT, 2, 1, 'BonAqua carbonated water', '', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png', '0.33_15|0.5_25'),
(DEFAULT, 2, 1, 'Coca-Cola', '', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png', '0.33_20|0.5_30'),
(DEFAULT, 2, 1, 'Sprite', '','https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png', '0.33_20'),
(DEFAULT, 2, 1, 'Leffe Brune', '', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg', '0.5_35'),
(DEFAULT, 2, 1, 'Black tea', '', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png', '0.25_25'),
(DEFAULT, 2, 1, 'Red vine', '', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png', '50_60'),
-- BURGER (3/11)
(DEFAULT, 3, 1, 'CheeseBurger', 'burger bun, mayonnaise, spinach, red onion, cheddar cheese', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png', '325_120'),
-- NOODLES (4/6)
(DEFAULT, 4, 1, 'VegNoodles',
 'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png', '275_115'),
-- PIZZA (5/15)
(DEFAULT, 5, 1, '4 cheese', 'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg', '25_140|30_165|45_215'),
(DEFAULT, 5, 1, 'Burger', 'Meat Ball, Cheddar, Bacon, Mozzarella, Pickled cucumber, Tomato, Burger sauce, Tomato sauce (base), Red onion', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png', '25_125|30_145|45_200'),
(DEFAULT, 5, 1, 'Cola BBQ', 'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png', '25_115|30_130|45_185'),
(DEFAULT, 5, 1, 'Bavarian', 'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg', '25_125|30_145|45_200'),
(DEFAULT, 5, 1, 'Bayraktar', 'mozzarella, salam Pepperoni, tomato sauce (base), champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png', '25_130|30_155|45_210'),
(DEFAULT, 5, 1, 'Javelin', 'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png', '25_130|30_155|45_210'),
(DEFAULT, 5, 1, 'Firmova', 'balik, bacon, ham, grilled chicken, mozzarella, bell pepper, pepperoni salami, tomato sauce (base)', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png', '25_125|30_145|45_200'),
(DEFAULT, 5, 1, 'Hawaiian', 'pineapple, smoked chicken, mozzarella, tomato sauce (base)', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png', '25_115|30_130|45_185'),
(DEFAULT, 5, 1, 'Mushroom', 'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png', '25_113|30_145|45_190'),
(DEFAULT, 5, 1, 'Italian', 'Dor bleu, sun-dried tomatoes, capers, Halal grilled chicken, mozzarella, Alfredo cream sauce (base), champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg', '25_120|30_145|45_200-5'),
(DEFAULT, 5, 1, 'Kebab Grill', 'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png', '25_130|30_155|45_210'),
(DEFAULT, 5, 1, 'BBQ chicken', 'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg', '25_125|30_145|45_200'),
(DEFAULT, 5, 1, 'Marinara', 'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Marinara.jpg', '25_140|30_160|45_215'),
(DEFAULT, 5, 1, 'Sicilian', 'grilled chicken, mozzarella, tomato sauce (base), champignons', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Sicilian.jpg', '25_120|30_140|45_190'),
(DEFAULT, 5, 1, 'Philadelphia', 'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Philadelphia.jpg', '25_130|30_165|45_215'),
-- SANDWITCH (6/3)
(DEFAULT, 6, 1, 'Sandwich with cheese', 'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png', '300_115'),
-- SEA FOOD (7/8)
(DEFAULT, 7, 1, 'Boiled shrimps', 'boiled shrimps, dill, salt, pepper', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png', '250_130'),
-- VEGETABLE (8/9)
(DEFAULT, 8, 1, 'Boiled corn', 'boiled corn, salt, butter,', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png', '200_95');


INSERT INTO root.GUEST (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Vlad', 970668830, 'vv11vv', 'vlad_S@gmail.com', false, false, 167233),
  (DEFAULT, 'Irina', 635957376, 'ii22ii', 'irina_S@gmail.com', false, false, 167234),
  (DEFAULT, 'David', 972959897, 'dd33dd', 'david_Y@gmail.com', false, false, 167235);

INSERT INTO root.COMPANY (id, name, phone, city, email, join_date, schedule) VALUES
  (DEFAULT, 'ArmAto', 661544404, 'Kozyatyn', 'armato@gmail.com', '22.05.2020', '8.00-21.00'),
  (DEFAULT, 'PizzaClub', 678894546, 'Kyiv', 'pizzaclub@gmail.com', '17.09.2018', '10.00-22.00'),
  (DEFAULT, 'Dominos', 662454545, 'Lviv', 'dominos@gmail.com', '05.07.2021', '9.00-23.00'),
  (DEFAULT, 'MamaMia', 981346768, 'Kharkiv', 'mamamia@gmail.com', '01.09.2018', '10.00-24.00');

INSERT INTO root.HISTORY
(id, guest_id, company_id, order_details, date_time, is_paid, is_prepared) VALUES
    (DEFAULT, 1, 1, '5 S 1 113', '03.12.2022', true, true),
    (DEFAULT, 1, 1, '6 m 1 145| 8 m 1 145| 26 1 s 40| 28 s 1 40', '31.12.2022', true, true),
    (DEFAULT, 2, 1, '33 s 2 113| 14 m 1 145| 20 s 1 15| 27 s 1 40', '02.01.2023', true, true),
    (DEFAULT, 2, 2, '15 s 1 113| 9 s 1 113| 22 s 3 25', '03.01.2023', true, false),
    (DEFAULT, 3, 4, '50 m 1 145| 51 m 1 145| 53 s 1 113', '04.01.2023', true, true),
    (DEFAULT, 3, 3, '7 l 1 200| 31 s 3 115| 22 s 1 25| 23 s 2 25', '06.01.2023', false, false);





-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work

CREATE SCHEMA root;

CREATE TABLE root.MENU_ITEM
(
    ID           SERIAL NOT NULL,
    CATEGORY_ID  INT    NOT NULL,
    COMPANY_ID   INT    NOT NULL,
    NAME         TEXT   NOT NULL,
    DESCRIPTION  TEXT,
    COOKING_TIME TEXT   NOT NULL,
    PRICE        INT    NOT NULL,
    SIZE         TEXT   NOT NULL,
    IMAGE_URL    TEXT   NOT NULL
--     LIKED       INT    NOT NULL,   -- show liked in sub_category
--     TIME_PREPARATION INT    NOT NULL,
--     IS_HIDDEN  BOOLEAN,            -- instead of deleting owner can hide
);

CREATE TABLE root.CUSTOMER
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
    ID        SERIAL   NOT NULL,
    NAME      TEXT     NOT NULL,
    PHONES    TEXT []  NOT NULL,
    EMAIL     TEXT,
    CITY      TEXT     NOT NULL,
    STREET    TEXT     NOT NULL,
    JOIN_DATE TEXT,
    SCHEDULE  TEXT,
    PHOTOS    TEXT []
);

CREATE TABLE root.HISTORY
(
    ID            SERIAL NOT NULL,
    CUSTOMER_ID   INT    NOT NULL,
    COMPANY_ID    INT    NOT NULL,
    ORDER_DETAILS TEXT,
    DATE_TIME     TEXT,
    IS_PAID       BOOLEAN,
    IS_PREPARED   BOOLEAN
);

INSERT INTO root.MENU_ITEM (id, category_id, company_id, name, description, cooking_time, price, size, image_url) VALUES
  (DEFAULT, 1, 1, 'Chocolate muffin',          'muffin, chocolate drops, whipped cream',                                                                          '5', 30, '150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
  (DEFAULT, 1, 1, 'Vanilla muffin',            'muffin, white chocolate drops, whipped cream',                                                                    '5', 30, '150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
  (DEFAULT, 2, 1, 'BonAqua carbonated water',  '',                                                                                                                '45', 80,  '1.5',   'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
  (DEFAULT, 2, 1, 'Coca-Cola',                 '',                                                                                                                '25', 90,  '0.33',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
  (DEFAULT, 2, 1, 'Sprite',                    '',                                                                                                                '30', 60,  '0.5',   'https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png'),
  (DEFAULT, 3, 1, 'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                      '15', 115, '350','https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 4, 1, 'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',            '20', 120, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 5, 1, '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                                              '15', 115, '550','https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 1, 'Burger',                    'Meat Ball, Cheddar, Bacon, Mozzarella, Pickled cucumber, Tomato, Burger sauce, Tomato sauce (base), Red onion',    '15', 210, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png'),
  (DEFAULT, 5, 1, 'Cola BBQ',                  'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons',               '20', 195, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png'),
  (DEFAULT, 5, 1, 'Bavarian',                  'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef',                                 '15', 150, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg'),
  (DEFAULT, 5, 1, 'Bayraktar',                 'mozzarella, salam Pepperoni, tomato sauce (base), champignons',                                                    '25', 250, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png'),
  (DEFAULT, 5, 1, 'Javelin',                   'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons',                                 '30', 180, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png'),
  (DEFAULT, 5, 1, 'Firmova',                   'balik, bacon, ham, grilled chicken, mozzarella, bell pepper, pepperoni salami, tomato sauce (base)',               '10', 95, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png'),
  (DEFAULT, 5, 1, 'Hawaiian',                  'pineapple, smoked chicken, mozzarella, tomato sauce (base)',                                                       '15', 170, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png'),
  (DEFAULT, 5, 1, 'Mushroom',                  'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons',                                            '12', 115, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png'),
  (DEFAULT, 5, 1, 'Italian',                   'Dor bleu, sun-dried tomatoes, capers, Halal grilled chicken, mozzarella, Alfredo cream sauce (base), champignons', '20', 160, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg'),
  (DEFAULT, 5, 1, 'Kebab Grill',               'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', '10', 100, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png'),
  (DEFAULT, 5, 1, 'BBQ chicken',               'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion',                                  '25', 210, '1150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg'),
  (DEFAULT, 5, 1, 'Marinara',                  'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)',                                     '20', 155, '650', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Marinara.jpg'),
  (DEFAULT, 5, 1, 'Sicilian',                  'grilled chicken, mozzarella, tomato sauce (base), champignons',                                                     '30', 250, '1200', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Sicilian.jpg'),
  (DEFAULT, 5, 1, 'Philadelphia',              'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon',                                     '15', 115, '650', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Philadelphia.jpg'),
  (DEFAULT, 6, 1, 'Sandwich with cheese',      'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese',                                                       '25', 115, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
  (DEFAULT, 7, 1, 'Boiled shrimps',             'boiled shrimps, dill, salt, pepper',                                                                                '20', 80, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png'),
  (DEFAULT, 8, 1, 'Boiled corn',                'boiled corn, salt, butter,',                                                                                        '10', 60, '300', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
  (DEFAULT, 9, 1, 'Leffe Brune',                '',                                                                                                                  '45', 70, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg'),
  (DEFAULT, 10, 1, 'Red wine',                  '',                                                                                                                  '65', 50, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
  (DEFAULT, 11, 1, 'Black tea',                 '',                                                                                                                  '10m', 32, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png');

INSERT INTO root.CUSTOMER (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Vlad',  970668830, 'vv11vv', 'vlad_S@gmail.com',  false, false, 167233),
  (DEFAULT, 'Irina', 635957376, 'ii22ii', 'irina_S@gmail.com', false, false, 167234),
  (DEFAULT, 'David', 972959897, 'dd33dd', 'david_Y@gmail.com', false, false, 167235);

INSERT INTO root.COMPANY (id, name, phone, email, city, street, join_date, schedule, photos) VALUES
  (DEFAULT, 'ArmAto',      ARRAY [ '(066)-578-4567', '(067)-578-4567'], 'armato@gmail.com',      'kozyatyn', 'Вінницька, 15',     '22.05.2020', '08.00-21.00', ARRAY [ 'https://cdn.pixabay.com/photo/2020/03/30/10/18/electric-scooter-4983759__340.jpg', 'https://cdn.pixabay.com/photo/2020/10/07/12/33/cafe-5635015__340.jpg']),
  (DEFAULT, 'PizzaClub',   ARRAY [ '(098)-222-2222', '(066)-222-2222'], 'pizzaclub@gmail.com',   'kyiv',     'Перемоги, 4',       '17.09.2018', '10.00-22.00', ARRAY [ 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg', 'https://cdn.pixabay.com/photo/2019/12/15/18/08/cats-cafe-4697753__340.jpg']),
  (DEFAULT, 'HlibCoffee',  ARRAY [ '(044)-134-4404', '(097)-134-4404'], 'hlibcoffee@gmail.com',  'kyiv',     'Владиславська, 12', '01.09.2018', '10.00-22.00', ARRAY [ 'https://cdn.pixabay.com/photo/2016/08/14/19/54/street-1593850__340.jpg', 'https://cdn.pixabay.com/photo/2014/07/15/13/36/coffee-shop-393954__340.jpg']),
  (DEFAULT, 'Chelentano',  ARRAY [ '(066)-456-6678', '(098)-345-5634'], 'chelentano@gmail.com',  'kyiv',     'Сонячна, 45',       '15.02.2020', '10.00-22.00', ARRAY [ 'https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285__340.jpg', 'https://cdn.pixabay.com/photo/2017/08/02/00/05/places-2568876__340.jpg']),
  (DEFAULT, 'Dominos',     ARRAY [ '(098)-454-3333', '(066)-454-3333'], 'dominos@gmail.com',     'lviv',     'Західна, 25',       '05.07.2021', '09.00-23.00', ARRAY [ 'https://cdn.pixabay.com/photo/2014/09/04/15/41/restaurant-435588__340.jpg', 'https://cdn.pixabay.com/photo/2016/09/21/10/08/salad-1684468__340.jpg']),
  (DEFAULT, 'CoffeeMolka', ARRAY [ '(067)-123-4567', '(099)-123-4567'], 'cofeemolka@gmail.com',  'irpin',    'Соборна, 108А',     '01.10.2021', '10.00-24.00', ARRAY [ 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656__340.jpg', 'https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888__340.jpg']),
  (DEFAULT, 'Divine',      ARRAY [ '(066)-444-1212', '(098)-333-2211'], 'divine@gmail.com',      'odesa',    'Набережна, 75',     '03.05.2018', '10.00-24.00', ARRAY [ 'https://cdn.pixabay.com/photo/2020/04/02/23/01/rain-4996916__340.jpg', 'https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312__340.jpg']),
  (DEFAULT, 'CherryHouse', ARRAY [ '(097)-252-6787', '(099)-345-8970'], 'cherryhouse@gmail.com', 'odesa',    'Південна, 17/3',    '21.10.2022', '10.00-24.00', ARRAY [ 'https://cdn.pixabay.com/photo/2017/09/03/16/29/terrace-2710990__340.jpg', 'https://cdn.pixabay.com/photo/2017/06/05/09/10/food-2373414__340.jpg']),
  (DEFAULT, 'MamaMia',     ARRAY [ '(067)-098-0121', '(093)-188-0323'], 'mamamia@gmail.com',     'kharkiv',  'Східна, 8',         '05.01.2023', '10.00-24.00', ARRAY [ 'https://cdn.pixabay.com/photo/2017/02/20/08/50/cafe-2081857__340.jpg', 'https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000602__340.jpg']);

INSERT INTO root.HISTORY
(id, customer_id, company_id, order_details, date_time, is_paid, is_prepared) VALUES
  (DEFAULT, 1, 1, '5 S 1 113',                                    '03.12.2022', true,  true),
  (DEFAULT, 1, 1, '6 m 1 145| 8 m 1 145| 26 1 s 40| 28 s 1 40',   '31.12.2022', true,  true),
  (DEFAULT, 2, 1, '33 s 2 113| 14 m 1 145| 20 s 1 15| 27 s 1 40', '02.01.2023', true,  true),
  (DEFAULT, 2, 2, '15 s 1 113| 9 s 1 113| 22 s 3 25',             '03.01.2023', true,  false),
  (DEFAULT, 3, 4, '50 m 1 145| 51 m 1 145| 53 s 1 113',           '04.01.2023', true,  true),
  (DEFAULT, 3, 3, '7 l 1 200| 31 s 3 115| 22 s 1 25| 23 s 2 25',  '06.01.2023', false, false);





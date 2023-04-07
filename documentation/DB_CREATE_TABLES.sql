-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work


CREATE TABLE MENU_ITEM
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

CREATE TABLE CUSTOMER
(
    ID                SERIAL NOT NULL,
    NAME              TEXT   NOT NULL,
    PHONE             INT    NOT NULL,
    PASSWORD          TEXT   NOT NULL,
    EMAIL             TEXT,
    IS_VERIFIED_PHONE BOOLEAN,
    IS_VERIFIED_EMAIL BOOLEAN,
    JOIN_DATE         INT,
    LIKED_MENU_ITEMS  TEXT
);

CREATE TABLE COMPANY
(
    ID          SERIAL   NOT NULL,
    CUSTOMER_ID INT      NOT NULL,
    NAME        TEXT     NOT NULL,
    PHONES      TEXT     NOT NULL,
    CITY        TEXT     NOT NULL,
    STREET      TEXT     NOT NULL,
    JOIN_DATE   TEXT,
    SCHEDULE    TEXT,
    PHOTOS      TEXT
);

CREATE TABLE HISTORY
(
    ID            SERIAL NOT NULL,
    CUSTOMER_ID   INT    NOT NULL,
    COMPANY_ID    INT    NOT NULL,
    ORDER_DETAILS TEXT,
    DATE_TIME     TEXT,
    IS_PAID       BOOLEAN,
    IS_PREPARED   BOOLEAN
);

INSERT INTO MENU_ITEM (id, category_id, company_id, name, description, cooking_time, price, size, image_url) VALUES
  (DEFAULT, 1, 1,   'Chocolate muffin',          'muffin, chocolate drops, whipped cream',                                                                           '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
  (DEFAULT, 1, 2,   'Chocolate muffin',          'muffin, chocolate drops, whipped cream',                                                                           '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
  (DEFAULT, 1, 3,   'Chocolate muffin',          'muffin, chocolate drops, whipped cream',                                                                           '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
  (DEFAULT, 1, 17,  'Chocolate muffin',          'muffin, chocolate drops, whipped cream',                                                                           '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
  (DEFAULT, 1, 1,   'Ванільний маффін',          'маффін, краплі з білого шоколаду, збиті вершки',                                                                   '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
  (DEFAULT, 1, 7,   'Ванільний маффін',          'маффін, краплі з білого шоколаду, збиті вершки',                                                                   '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
  (DEFAULT, 1, 5,   'Ванільний маффін',          'маффін, краплі з білого шоколаду, збиті вершки',                                                                   '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
  (DEFAULT, 1, 17,  'Ванільний маффін',          'маффін, краплі з білого шоколаду, збиті вершки',                                                                   '5',  30,  '150',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
  (DEFAULT, 2, 1,   'BonAqua carbonated water',  '',                                                                                                                 '45', 80,  '1.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
  (DEFAULT, 2, 5,   'BonAqua carbonated water',  '',                                                                                                                 '45', 80,  '1.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
  (DEFAULT, 2, 17,  'BonAqua carbonated water',  '',                                                                                                                 '45', 80,  '1.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
  (DEFAULT, 2, 1,   'Кока-Кола',                 '',                                                                                                                 '25', 90,  '0.33', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
  (DEFAULT, 2, 3,   'Кока-Кола',                 '',                                                                                                                 '25', 90,  '0.33', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
  (DEFAULT, 2, 13,  'Кока-Кола',                 '',                                                                                                                 '25', 90,  '0.33', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
  (DEFAULT, 2, 17,  'Кока-Кола',                 '',                                                                                                                 '25', 90,  '0.33', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
  (DEFAULT, 2, 1,   'Sprite',                    '',                                                                                                                 '30', 60,  '0.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png'),
  (DEFAULT, 2, 5,   'Sprite',                    '',                                                                                                                 '30', 60,  '0.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png'),
  (DEFAULT, 2, 13,  'Sprite',                    '',                                                                                                                 '30', 60,  '0.5',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png'),
  (DEFAULT, 3, 1,   'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                       '15', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 3, 3,   'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                       '15', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 3, 5,   'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                       '15', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 3, 9,   'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                       '15', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 3, 18,  'CheeseBurger',              'burger bun, mayonnaise, spinach, red onion, cheddar cheese',                                                       '15', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
  (DEFAULT, 4, 1,   'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 4, 3,   'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 4, 5,   'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 4, 10,  'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 4, 12,  'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 4, 18,  'VegNoodles',                'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water',             '20', 120, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
  (DEFAULT, 5, 1,   '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                 '15', 115, '550',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 6,   '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                                              '15', 115, '550',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 3,   '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                                              '15', 115, '550',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 8,   '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                                              '15', 115, '550',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 10,  '4 cheese',                  'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)',                                              '15', 115, '550',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
  (DEFAULT, 5, 1,   'Бургер-піца',               'М"ясні кульки, чеддер, бекон, моцарелла, корнішони, помідор, Бургер-соус, томатний соус, червона цибуля,',          '15', 210, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png'),
  (DEFAULT, 5, 6,   'Бургер-піца',               'М"ясні кульки, чеддер, бекон, моцарелла, корнішони, помідор, Бургер-соус, томатний соус, червона цибуля',          '15', 210, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png'),
  (DEFAULT, 5, 8,   'Бургер-піца',               'М"ясні кульки, чеддер, бекон, моцарелла, корнішони, помідор, Бургер-соус, томатний соус, червона цибуля',          '15', 210, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png'),
  (DEFAULT, 5, 1,   'Cola BBQ',                  'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons',               '20', 195, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png'),
  (DEFAULT, 5, 6,   'Cola BBQ',                  'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons',               '20', 195, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png'),
  (DEFAULT, 5, 8,   'Cola BBQ',                  'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons',               '20', 195, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png'),
  (DEFAULT, 5, 1,   'Bavarian',                  'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef',                                 '15', 150, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg'),
  (DEFAULT, 5, 6,   'Bavarian',                  'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef',                                 '15', 150, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg'),
  (DEFAULT, 5, 8,   'Bavarian',                  'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef',                                 '15', 150, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg'),
  (DEFAULT, 5, 1,   'Байрактар',                 'моцарелла, салямі Папероні, томатний соус, шампіньони',                                                            '25', 250, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png'),
  (DEFAULT, 5, 6,   'Байрактар',                 'моцарелла, салямі Папероні, томатний соус, шампіньони',                                                            '25', 250, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png'),
  (DEFAULT, 5, 8,   'Байрактар',                 'моцарелла, салямі Папероні, томатний соус, шампіньони',                                                            '25', 250, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png'),
  (DEFAULT, 5, 1,   'Javelin',                   'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons',                                 '30', 180, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png'),
  (DEFAULT, 5, 6,   'Javelin',                   'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons',                                 '30', 180, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png'),
  (DEFAULT, 5, 8,   'Javelin',                   'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons',                                 '30', 180, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png'),
  (DEFAULT, 5, 1,   'Фірмова',                   'балик, бекон, шинка, курячу філе-гриль, моцарелла, перець, салямі Папероні, томатний соус',                        '10', 95,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png'),
  (DEFAULT, 5, 6,   'Фірмова',                   'балик, бекон, шинка, курячу філе-гриль, моцарелла, перець, салямі Папероні, томатний соус',                        '10', 95,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png'),
  (DEFAULT, 5, 8,   'Фірмова',                   'балик, бекон, шинка, курячу філе-гриль, моцарелла, перець, салямі Папероні, томатний соус',                        '10', 95,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png'),
  (DEFAULT, 5, 1,   'Hawaiian',                  'pineapple, smoked chicken, mozzarella, tomato sauce (base)',                                                       '15', 170, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png'),
  (DEFAULT, 5, 6,   'Hawaiian',                  'pineapple, smoked chicken, mozzarella, tomato sauce (base)',                                                       '15', 170, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png'),
  (DEFAULT, 5, 8,   'Hawaiian',                  'pineapple, smoked chicken, mozzarella, tomato sauce (base)',                                                       '15', 170, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png'),
  (DEFAULT, 5, 1,   'Mushroom',                  'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons',                                            '12', 115, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png'),
  (DEFAULT, 5, 6,   'Mushroom',                  'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons',                                            '12', 115, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png'),
  (DEFAULT, 5, 8,   'Mushroom',                  'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons',                                            '12', 115, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png'),
  (DEFAULT, 5, 1,   'Італійська',                'сир Дор-блю, вЄялені томати, каперси, уряче філе-гриль, моцарелла, крем-соус Альфредо, шампіньони',                '20', 160, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg'),
  (DEFAULT, 5, 6,   'Італійська',                'сир Дор-блю, вЄялені томати, каперси, уряче філе-гриль, моцарелла, крем-соус Альфредо, шампіньони',                '20', 160, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg'),
  (DEFAULT, 5, 8,   'Італійська',                'сир Дор-блю, вЄялені томати, каперси, уряче філе-гриль, моцарелла, крем-соус Альфредо, шампіньони',                '20', 160, '750',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg'),
  (DEFAULT, 5, 1,   'Kebab Grill',               'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', '10', 100, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png'),
  (DEFAULT, 5, 16,  'Kebab Grill',               'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', '10', 100, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png'),
  (DEFAULT, 5, 8,   'Kebab Grill',               'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', '10', 100, '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png'),
  (DEFAULT, 5, 1,   'BBQ chicken',               'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion',                                 '25', 210, '1150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg'),
  (DEFAULT, 5, 8,   'BBQ chicken',               'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion',                                 '25', 210, '1150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg'),
  (DEFAULT, 5, 16,  'BBQ chicken',               'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion',                                 '25', 210, '1150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg'),
  (DEFAULT, 5, 1,   'Marinara',                  'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)',                                    '20', 155, '650',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Marinara.jpg'),
  (DEFAULT, 5, 8,   'Marinara',                  'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)',                                    '20', 155, '650',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Marinara.jpg'),
  (DEFAULT, 5, 1,   'Сицилійська',               'куряче філе-гриль, моцарелла, томатний соус, шампіньони, крем-соус Сицилія',                                       '30', 250, '1200', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Sicilian.jpg'),
  (DEFAULT, 5, 8,   'Сицилійська',               'куряче філе-гриль, моцарелла, томатний соус, шампіньони, крем-соус Сицилія',                                       '30', 250, '1200', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Sicilian.jpg'),
  (DEFAULT, 5, 1,   'Philadelphia',              'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon',                                    '15', 115, '650',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Philadelphia.jpg'),
  (DEFAULT, 5, 8,   'Philadelphia',              'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon',                                    '15', 115, '650',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Philadelphia.jpg'),
  (DEFAULT, 6, 1,   'Sandwich with cheese',      'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese',                                                     '25', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
  (DEFAULT, 6, 3,   'Sandwich with cheese',      'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese',                                                     '25', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
  (DEFAULT, 6, 10,  'Sandwich with cheese',      'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese',                                                     '25', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
  (DEFAULT, 6, 16,  'Sandwich with cheese',      'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese',                                                     '25', 115, '350',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
  (DEFAULT, 7, 1,   'Boiled shrimps',            'boiled shrimps, dill, salt, pepper',                                                                               '20', 80,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png'),
  (DEFAULT, 7, 3,   'Boiled shrimps',            'boiled shrimps, dill, salt, pepper',                                                                               '20', 80,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png'),
  (DEFAULT, 7, 16,  'Boiled shrimps',            'boiled shrimps, dill, salt, pepper',                                                                               '20', 80,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png'),
  (DEFAULT, 8, 1,   'Варена кукурудза',          'варена кукурудза, сіль, маслоб спеції',                                                                            '10', 60,  '300',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
  (DEFAULT, 8, 3,   'Варена кукурудза',          'варена кукурудза, сіль, маслоб спеції',                                                                            '10', 60,  '300',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
  (DEFAULT, 8, 7,   'Варена кукурудза',          'варена кукурудза, сіль, маслоб спеції',                                                                            '10', 60,  '300',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
  (DEFAULT, 8, 18,  'Варена кукурудза',          'варена кукурудза, сіль, маслоб спеції',                                                                            '10', 60,  '300',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
  (DEFAULT, 9, 1,   'Leffe Brune',                '',                                                                                                                '45', 70,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg'),
  (DEFAULT, 9, 3,   'Leffe Brune',                '',                                                                                                                '45', 70,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg'),
  (DEFAULT, 9, 4,   'Leffe Brune',                '',                                                                                                                '45', 70,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg'),
  (DEFAULT, 10, 1,  'Red wine',                   '',                                                                                                                '65', 50,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
  (DEFAULT, 10, 3,  'Red wine',                   '',                                                                                                                '65', 50,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
  (DEFAULT, 10, 4,  'Red wine',                   '',                                                                                                                '65', 50,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
  (DEFAULT, 10, 11, 'Red wine',                   '',                                                                                                                '65', 50,  '500',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
  (DEFAULT, 11, 1,  'Чорний чай',                 '',                                                                                                                '10', 32,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
  (DEFAULT, 11, 7,  'Чорний чай',                 '',                                                                                                                '10', 32,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
  (DEFAULT, 11, 3,  'Чорний чай',                 '',                                                                                                                '10', 32,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
  (DEFAULT, 11, 4,  'Чорний чай',                 '',                                                                                                                '10', 32,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
  (DEFAULT, 11, 12, 'Чорний чай',                 '',                                                                                                                '10', 32,  '250',  'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png');

INSERT INTO CUSTOMER (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Vlad',  970668830, 'vv11vv', 'vlad_S@gmail.com',  false, false, 167233),
  (DEFAULT, 'Ірина', 635957376, 'ii22ii', 'irina_S@gmail.com', false, false, 167234),
  (DEFAULT, 'David', 972959897, 'dd33dd', 'david_Y@gmail.com', false, false, 167235);

INSERT INTO COMPANY (id, customer_id, name, phones, city, street, join_date, schedule, photos) VALUES
  (DEFAULT, 1, 'АрмАто',      '0665784567, 0675784567',  'Вінниця',  'Вінницька, 15',     '22.05.2020', '', ''),
  (DEFAULT, 1, 'ПіццаМанія',  '0665784568, 0675784567',  'Вінниця',  'Теліги, 17',        '22.05.2020', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2020/03/30/10/18/electric-scooter-4983759__340.jpg'),
  (DEFAULT, 1, 'Мрія',        '0665784565, 0675784567',  'Вінниця',  'Шевченка, 15',      '22.05.2020', '10.00-22.00,,,,,,', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-96nRwcUjyGtV1ho1qssXZbEdOLMxX8ngg&usqp=CAU, https://cdn.pixabay.com/photo/2020/10/07/12/33/cafe-5635015__340.jpg'),
  (DEFAULT, 1, 'Піт-стоп',    '0665784567, 0675784567',  'Вінниця',  'Іванівська, 15',    '22.05.2020', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, , ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ0YFNCJRRXSkY4kmsxaxn3EzD2TbFSbJLkA&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgmLZJ28enQab1yD4pI4_qbb38gM_x4icng&usqp=CAU,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwvgTSdfHyxZJXplDULbcpKNtXaz0eBwNAw&usqp=CAU'),
  (DEFAULT, 1, 'Біла ніч',    '0665784562, 0675784567',  'Вінниця',  'Вільна, 15',        '22.05.2020', '09.00-20.00, 09.00-20.00, 12.00-18.00, 09.00-20.00, 09.00-20.00, 09.00-20.00, 09.00-20.00', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyRJYoMdeAw6hFzRkFK_hk9e_Qfr4IjlsgsoI_jc62FUcYVwunwrvqZqNg1xh5TuO23is&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCTwRAKjaEQKgBfGcDmX6kBsCWT4c2p5Y7w&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJXcmzVg77Fb6XIbYW2VQcEWSVnUynKoNww&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxOIWqryYtGdNp4qe2j8SmmpG7qecsXEenQ&usqp=CAU'),
  (DEFAULT, 1, 'GrillBar',    '0665784561, 0675784567',  'Вінниця',  'Липова, 15',        '22.05.2020', 'ВХ, 10.00-22.00, 10.00-22.00, 10.00-22.00, 10.00-23.00, 12.00-00.00, ВХ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnsrqJcneoH-2HpzqUFRb120G7U--6ndnoAjUI2HDaw2gM5ojIMkAIIU8TLY1xm_lDYM&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJMJj1z3YY5Cvkk_emYjmq2-cmhmzPXWyLg&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgZxAGXbLjhx7MTXCXmjBBj1b5qYja4n7Rg&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaDK7Lge-CtjA7tr3Jn5r7QEVThwihpX0SA&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGKAHhufVtce3ODPFSFJ6gyBQs2qrmjv_nw&usqp=CAU'),
  (DEFAULT, 1, 'CoffeeShop',  '0665784569, 0675784567',  'Вінниця',  'Франка, 15',        '22.05.2020', '08.00-21.00, , 08.00-21.00, , 08.00-21.00, ВХ, ВХ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh1HKFBdiJKY4Qyq51jtofshlnWA4vJ0n1W4mbUnE7IYuMlX3AIz1ePKthA3QVGO5qIA&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5rXvAA2Xcpc3dIWJLLQcww4ufLxoRywVQQ&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8DiDMDrqNbZoU_m3343t_dSmfL7gYQCAew&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxKj8b6gjUFezk3pHp4UZHkC-xc92aI3UYQ&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmYxxj3MzwwwmBFzNLccRMct5NNICQ-JHog&usqp=CAU, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNEjI99iB8xY-p1iETFnJZC8k63usu4XWYA&usqp=CAU, https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg, https://cdn.pixabay.com/photo/2017/02/12/16/38/scotch-2060499__340.jpg, https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351__340.jpg, https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459__340.jpg, https://cdn.pixabay.com/photo/2016/11/18/15/53/breakfast-1835478__340.jpg'),
  (DEFAULT, 1, 'Perfetto',    '0982222221, 0662222222',  'Київ',     'Перемоги, 4',       '17.09.2018', '10.00-22.00, 10.30-22.00, 10.00-22.00, 10.00-22.00, 10.00-22.00, 10.00-20.00, 10.00-20.00', 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801__340.jpg, https://cdn.pixabay.com/photo/2019/12/15/18/08/cats-cafe-4697753__340.jpg, https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg, https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813__340.jpg, https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446__340.jpg, https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665__340.jpg, https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408__340.jpg, https://cdn.pixabay.com/photo/2016/11/08/06/45/couple-1807617__340.jpg, https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150__340.jpg, https://cdn.pixabay.com/photo/2017/02/12/16/38/scotch-2060499__340.jpg'),
  (DEFAULT, 2, 'КлубПіцца',   '0982222222, 0662222222',  'Київ',     'Оксамитова, 4',     '17.09.2018', 'ВХ, ВХ, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJB3CStKXrqug8Hxqvk3sLJpb9RYt5oVz4k_-C-0UT_jTuxekciyOA8nQikM3cHoDJgUI&usqp=CAU, https://cdn.pixabay.com/photo/2019/12/15/18/08/cats-cafe-4697753__340.jpg'),
  (DEFAULT, 2, 'NeoBar',      '0982222223, 0662222222',  'Київ',     'Грушевського, 4',   '17.09.2018', '11.00-00.00, 11.00-00.00, 11.00-00.00, 11.00-00.00, 11.00-00.00, 11.00-00.00, ВХ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOd7RyyATjESQ9Tg6rlJzw1HmYeDKDg9MfAg&usqp=CAU, https://cdn.pixabay.com/photo/2019/12/15/18/08/cats-cafe-4697753__340.jpg'),
  (DEFAULT, 2, 'Pesto',       '0982222224, 0662222222',  'Київ',     'Малевича, 4',       '17.09.2018', '09.30-17.30, 09.30-17.30, 09.30-17.30, 09.30-17.30, 09.30-17.30, 09.30-17.30, 09.30-17.30', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbyNPv0oMydblUDy10WuxyDfYryya4qHrLA&usqp=CAU, https://cdn.pixabay.com/photo/2016/11/18/15/53/breakfast-1835478__340.jpg, https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg'),
  (DEFAULT, 2, 'PizzaClub',   '0982222225, 0662222222',  'Київ',     'Озерна, 4',         '17.09.2018', '08.00-21.00, 09.00-21.00, 10.00-21.00, 11.00-21.00, 12.00-21.00, ВХ, ВХ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGJ3USABIr9dmIrY_sV-zdeUefvO6ocF_kg&usqp=CAU, https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332__340.jpg, https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg'),
  (DEFAULT, 2, 'ХлібКава',    '0441344404, 0971344402',  'Київ',     'Владиславська, 12', '01.09.2018', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2016/08/14/19/54/street-1593850__340.jpg, https://cdn.pixabay.com/photo/2014/07/15/13/36/coffee-shop-393954__340.jpg, https://cdn.pixabay.com/photo/2015/05/31/14/24/vintage-791942__340.jpg, https://cdn.pixabay.com/photo/2020/09/21/05/57/coffee-5589036__340.jpg, https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984__340.jpg'),
  (DEFAULT, 2, 'Chelentano',  '0664566678, 0983455632',  'Київ',     'Сонячна, 45',       '15.02.2020', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2019/06/25/13/59/city-4298285__340.jpg, https://cdn.pixabay.com/photo/2017/08/02/00/05/places-2568876__340.jpg, https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317__340.jpg, https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984__340.jpg, '),
  (DEFAULT, 2, 'Домінос',     '0984543333, 0664543333',  'Київ',     'Західна, 25',       '05.07.2021', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2014/09/04/15/41/restaurant-435588__340.jpg, https://cdn.pixabay.com/photo/2016/09/21/10/08/salad-1684468__340.jpg'),
  (DEFAULT, 3, 'CoffeeMolka', '0671234566, 0991234567',  'Ірпінь',   'Соборна, 108А',     '01.10.2021', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656__340.jpg, https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888__340.jpg'),
  (DEFAULT, 3, 'Дівайн',      '0664441217, 0983332211',  'Київ',     'Набережна, 75',     '03.05.2018', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2020/04/02/23/01/rain-4996916__340.jpg, https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312__340.jpg'),
  (DEFAULT, 3, 'CherryHouse', '0972526788, 0993458970',  'Київ',     'Південна, 17/3',    '21.10.2022', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2017/09/03/16/29/terrace-2710990__340.jpg, https://cdn.pixabay.com/photo/2017/06/05/09/10/food-2373414__340.jpg'),
  (DEFAULT, 3, 'МамаМія',     '0670980128, 0931880323',  'Київ',     'Східна, 8',         '05.01.2023', '08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, 08.00-21.00, ВХ, ВХ', 'https://cdn.pixabay.com/photo/2017/02/20/08/50/cafe-2081857__340.jpg, https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000602__340.jpg');

INSERT INTO HISTORY
(id, customer_id, company_id, order_details, date_time, is_paid, is_prepared) VALUES
  (DEFAULT, 1, 1, '5 S 1 113',                                    '03.12.2022', true,  true),
  (DEFAULT, 1, 1, '6 m 1 145| 8 m 1 145| 26 1 s 40| 28 s 1 40',   '31.12.2022', true,  true),
  (DEFAULT, 2, 1, '33 s 2 113| 14 m 1 145| 20 s 1 15| 27 s 1 40', '02.01.2023', true,  true),
  (DEFAULT, 2, 2, '15 s 1 113| 9 s 1 113| 22 s 3 25',             '03.01.2023', true,  false),
  (DEFAULT, 3, 4, '50 m 1 145| 51 m 1 145| 53 s 1 113',           '04.01.2023', true,  true),
  (DEFAULT, 3, 3, '7 l 1 200| 31 s 3 115| 22 s 1 25| 23 s 2 25',  '06.01.2023', false, false);





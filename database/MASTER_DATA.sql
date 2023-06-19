-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work


INSERT INTO `CUSTOMER` (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Master',  '380970668830', 'masterMaster', ' masterMaster@gmail.com ', false, false, '1686300364887'),
  (DEFAULT, 'Vlad',     '380970668830', 'pma1111', 'vlad.serhiychuk@gmail.com',  false, false, '1686300364887'),
  (DEFAULT, 'Irina',    '380635957376', 'pma1111', 'serhiichuk.irina@gmail.com', false, false, '1686300364887'),
  (DEFAULT, 'Alex',     '380635957376', 'pma1111', 'Chorniy315@gmail.com',       false, false, '1686300364887'),
  (DEFAULT, 'Pasha',    '380972959897', 'pma1111', 'pasha.serhiichuk@gmail.com', false, false, '1686300364887');
  ;


INSERT INTO `COMPANY` (`ID`, `CUSTOMER_ID`, `NAME`, `PHONE`, `CITY`, `STREET`, `JOIN_DATE`, `SCHEDULE`, `PHOTOS`) VALUES
    (1, 1, 'Пузата хата +100', '380443914699', 'Київ', 'Георгія Кірпи, 3', '22.05.2020', '08:00-22:00, 08:00-22:00, 08:00-22:00, 08:00-22:00, 08:00-22:00, 08:00-22:00, 08:00-22:00', 'https://lh3.googleusercontent.com/p/AF1QipPOHkIGkDvpeRzRzGoCHJLJ1vlcPLMuJyH379il=s1360-w1360-h1020, https://lh3.googleusercontent.com/p/AF1QipN1fGK5RlKsMBFmtX4PsHDBIjPbGRmf3nUBcWia=s1360-w1360-h1020, https://lh3.googleusercontent.com/p/AF1QipMyxT4bIXtSLU6jgw2AaUTLUJN8fvvole2qmw84=s1360-w1360-h1020'),
    (2, 1, 'Львівські круассани', '380671907357', 'Київ', 'Хрещатик, 26', '22.05.2020', '11:00-21:00, 11:00-21:00, 11:00-21:00, 11:00-21:00, 11:00-21:00,,', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2CWwUiaZh5TUwcuJTzcQXUjlizWxbLQOjQ&usqp=CAU'),
    (3, 1, 'Сушия', '380665784567', 'Київ', 'Берковецька, 6д', '22.05.2020', ', 10:00-21:00, 10:00-21:00, 10:00-21:00, 08:00-21:00,,', 'https://sushiya.ua/media/sushiya/images/restaurants/cache/5/4/9/2/1/549217a3a89b16ee4d50ae7f0cca1debe6cbfdc6.webp'),
    (4, 1, 'Франс.ua', '380937403084', 'Київ', 'бульвар Дружби Народів, 23', '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,', 'https://media-cdn.tripadvisor.com/media/photo-s/17/b6/42/ae/getlstd-property-photo.jpg'),
    (5, 1, 'Песто кафе', '380443000370', 'Київ', 'Митрополита Андрея Шептицкого, 4а', '22.05.2020', '09:00-22:00, 09:00-22:00,, 09:00-22:00, 09:00-22:00,,', 'https://pesto-family.com/image/catalog/pestocafe/foto_p13/002.jpg'),
    (6, 1, 'Hanami', '380665784567', 'Ірпінь', 'Соборна, 118/19', '22.05.2020', '12:00-00:00, 12:00-00:00, 12:00-00:00, 12:00-00:00, 12:00-02:00, 12:00-02:00, 12:00-00:00', 'https://restobar.com.ua/wp-content/uploads/2019/07/6a79ed31-e1563877557246.jpg'),
    (7, 1, 'Veranda', '380737435216', 'Одеса', 'пляж Ланжерон, 65', '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,', 'https://veranda-odessa.com/storage/cache/15695868068794-370x255.jpg'),
    (8, 1, 'Хмари', '380984530404', 'Одеса', 'Катерининська, 27', '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,', 'https://mesta.com.ua/wp-content/uploads/2022/01/restoran-oblaka-v-odesse_1.jpeg.pagespeed.ce.rs1bLo9DBm.jpg'),
    (9, 1, 'Компот', '380487287775', 'Одеса', 'Дерибасівська, 20', '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,', 'https://odessa.travel/images/styles/img-800/public/odessa-img-20465148_0.jpg?itok=EGkpUW3U'),
    (10, 1, '5-те підземелля', '380996745351', 'Львів', 'Площа ринок, 5', '22.05.2020', '10:00-23:00, 10:00-23:00, 10:00-23:00, 10:00-23:00, 10:00-23:00, 10:00-23:00, 10:00-23:00', 'https://lh3.googleusercontent.com/p/AF1QipMNXcqkAsncAuHOvMvAhcHt7n-Pfb7zAgmEB-00=s1360-w1360-h1020');



INSERT INTO `MENU_ITEM` (`ID`, `CATEGORY_ID`, `COMPANY_ID`, `NAME`, `DESCRIPTION`, `COOKING_TIME`, `PRICE`, `SIZE`, `IMAGE_URL`) VALUES
    (1, 24, 1, 'Chocolate muffin', 'muffin, chocolate drops, whipped cream', '5', 30, '150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
    (2, 24, 1, 'Ванільний маффін', 'маффін, краплі з білого шоколаду, збиті вершки', '5', 30, '150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Vanilla_muffin.png'),
    (3, 26, 1, 'BonAqua carbonated water', '', '45', 80, '1.5', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
    (4, 26, 1, 'Кока-Кола', '', '25', 90, '0.33', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/cola.png'),
    (5, 26, 1, 'Sprite', '', '30', 60, '0.5', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/sprite.png'),
    (6, 10, 1, 'CheeseBurger', 'burger bun, mayonnaise, spinach, red onion, cheddar cheese', '15', 115, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
    (7, 10, 1, 'Double CheeseBurger', 'burger bun, mayonnaise, spinach, red onion, double cheddar cheese', '15', 115, '350', 'https://freepngimg.com/save/159187-burger-double-cheese-free-png-hq/700x487'),
    (8, 10, 1, 'FishBurger', 'burger bun, mayonnaise, spinach, red onion, file-o-fish, cheddar cheese', '15', 115, '350', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTDcpyG6zPHOXB3sLnG_6P2S0DnK5FnAqG73KyEXplw&s'),
    (9, 10, 1, 'Hamburger', 'burger bun, mayonnaise, spinach, red onion, ham, salami, cheddar cheese', '15', 115, '350', 'https://freepngimg.com/convert-png/10727-burger-png-picture'),
    (10, 14, 1, 'VegNoodles', 'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water', '20', 120, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
    (11, 15, 1, '4 cheese', 'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)', '15', 115, '550', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
    (12, 15, 1, 'Бургер-піца', 'М\"ясні кульки, чеддер, бекон, моцарелла, корнішони, помідор, Бургер-соус, томатний соус, червона цибуля,', '15', 210, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Burger.png'),
    (13, 15, 1, 'Cola BBQ', 'Bavarian sausages, bacon, mozzarella, jalapeno pepper, tomato sauce (base), red onion, champignons', '20', 195, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cola_BBQ.png'),
    (14, 15, 1, 'Bavarian', 'Bavarian sausages, Mozzarella, Pepperoni salami, Tomato sauce (base), Halal beef', '15', 150, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bavarian.jpg'),
    (15, 15, 1, 'Байрактар', 'моцарелла, салямі Папероні, томатний соус, шампіньони', '25', 250, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Bayraktar.png'),
    (16, 15, 1, 'Javelin', 'Bavarian sausages, corn, mozzarella, tomato sauce (base), red onion, champignons', '30', 180, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Javelin.png'),
    (17, 15, 1, 'Фірмова', 'балик, бекон, шинка, курячу філе-гриль, моцарелла, перець, салямі Папероні, томатний соус', '10', 95, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Firmova.png'),
    (18, 15, 1, 'Hawaiian', 'pineapple, smoked chicken, mozzarella, tomato sauce (base)', '15', 170, '1000', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Hawaiian.png'),
    (19, 15, 1, 'Mushroom', 'mozzarella, smoked paprika, parsley, tomato sauce (base), champignons', '12', 115, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Mushroom.png'),
    (20, 15, 1, 'Італійська', 'сир Дор-блю, вЄялені томати, каперси, уряче філе-гриль, моцарелла, крем-соус Альфредо, шампіньони', '20', 160, '750', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Italian.jpg'),
    (21, 15, 1, 'Kebab Grill', 'Satsebeli sauce, eggplant, lamb kebab, cilantro, mozzarella, bell pepper, tomato, tomato sauce (base), red onion', '10', 100, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Kebab_Grill.png'),
    (22, 15, 1, 'BBQ chicken', 'BBQ sauce, BBQ sauce (base), bacon, Halal grilled chicken, mozzarella, red onion', '25', 210, '1150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/BBQ_chicken.jpg'),
    (23, 15, 1, 'Marinara', 'squid, tiger shrimp, olives, mussels, mozzarella, creamy Alfredo sauce (base)', '20', 155, '650', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Marinara.jpg'),
    (24, 15, 1, 'Сицилійська', 'куряче філе-гриль, моцарелла, томатний соус, шампіньони, крем-соус Сицилія', '30', 250, '1200', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Sicilian.jpg'),
    (25, 15, 1, 'Philadelphia', 'sesame, mozzarella, tomato, creamy Alfredo sauce (base), cream cheese, salmon', '15', 115, '650', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Philadelphia.jpg'),
    (26, 29, 1, 'Red wine', '', '65', 50, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
    (27, 29, 1, 'White wine', '', '65', 50, '500', 'https://www.nicepng.com/png/detail/760-7609450_white-wine-png.png'),
    (28, 29, 1, 'Champagne', '', '65', 50, '500', 'https://png.pngitem.com/pimgs/s/2-25476_champagne-bottle-png-champagne-bottle-png-transparent-png.png'),
    (29, 29, 1, 'Rose wine', '', '65', 50, '500', 'https://static.specsonline.com/wp-content/uploads/2021/07/008500002647.jpg'),
    (30, 29, 1, 'Desert wine', '', '65', 50, '500', 'https://images.squarespace-cdn.com/content/v1/5f597ba0ef5ea43e56f38d0d/1653141141502-IRUVN544APYOV5ODP317/sextus_v2.png?format=1500w'),
    (31, 27, 1, 'Чорний чай', '', '10', 32, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
    (32, 27, 1, 'Зелений чай', '', '10', 32, '250', 'https://www.pngitem.com/pimgs/m/56-563587_green-tea-coffee-herbal-tea-hot-green-tea.png'),
    (33, 27, 1, 'Еспрессо', '', '10', 32, '250', 'https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg'),
    (34, 27, 1, 'Горіхове Латте', '', '10', 32, '250', 'https://www.nicepng.com/png/detail/312-3125665_hazelnut-latte-hazelnut-latte-png.png'),
    (35, 27, 1, 'Матча латте', '', '10', 32, '250', 'https://muskokamornings.ca/wp-content/uploads/2018/04/maatcha-latte-shutterstock_434052667-1.jpg'),
    (36, 15, 2, '4 cheese', 'Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base),Dor bleu, Parmesan, Cheddar, Mozzarella, Alfredo cream sauce (base)', '15', 115, '550', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/4_cheese.jpg'),
    (37, 24, 3, 'Chocolate muffin', 'muffin, chocolate drops, whipped cream', '5', 30, '150', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Chocolate_muffin.png'),
    (38, 27, 3, 'Чорний чай', '', '10', 32, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png'),
    (39, 26, 3, 'BonAqua carbonated water', '', '45', 80, '1.5', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/bon_aqua_gaz.png'),
    (40, 10, 4, 'CheeseBurger', 'burger bun, mayonnaise, spinach, red onion, cheddar cheese', '15', 115, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_burger.png'),
    (41, 14, 5, 'VegNoodles', 'noodles, pepper, carrots, ginger, celery, pepper, sesame oil, chili flakes, soy sauce, garlic, water', '20', 120, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Veg_noodles.png'),
    (42, 9, 5, 'Sandwich with cheese', 'plain bread, mayonnaise, lettuce, boiled egg, cheddar cheese', '25', 115, '350', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Cheese_sandwich.png'),
    (43, 17, 6, 'Boiled shrimps', 'boiled shrimps, dill, salt, pepper', '20', 80, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_shrimps.png'),
    (44, 18, 7, 'Варена кукурудза', 'варена кукурудза, сіль, маслоб спеції', '10', 60, '300', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Boiled_corn.png'),
    (45, 30, 8, 'Leffe Brune', '', '45', 70, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/leffe_brun.jpg'),
    (46, 29, 9, 'Red wine', '', '65', 50, '500', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Red_vine.png'),
    (47, 27, 10, 'Чорний чай', '', '10', 32, '250', 'https://raw.githubusercontent.com/SVladikO/testApp/master/images/Black_tea.png')
;

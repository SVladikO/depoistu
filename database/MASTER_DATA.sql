-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work


INSERT INTO CUSTOMER (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Master',    '380970668830', 'masterMaster', 'masterMaster@gmail.com',     false, true, '1686300364887'),
  (DEFAULT, 'Irina',     '380635957376', 'pma1111',      'serhiichuk.irina@gmail.com', false, true, '1686300364887'),
  (DEFAULT, 'Vlad',      '380970668830', 'pma1111',      'vlad.serhiychuk@gmail.com',  false, true, '1686300364887'),
  (DEFAULT, 'Alex',      '380635957376', 'pma1111',      'Chorniy315@gmail.com',       false, true, '1686300364887'),
  (DEFAULT, 'Pasha',     '380972959897', 'pma1111',      'pasha.serhiichuk@gmail.com', false, true, '1686300364887'),
  (DEFAULT, 'Customer1', '380981112233', 'depoistu',     'customer1@gmail.com',        false, true, '1686300364887'),
  (DEFAULT, 'Customer2', '380981112233', 'depoistu',     'customer2@gmail.com',        false, true, '1686300364887'),
  (DEFAULT, 'Customer3', '380981112233', 'depoistu',     'customer3@gmail.com',        false, true, '1686300364887'),
  (DEFAULT, 'Customer4', '380981112233', 'depoistu',     'customer4@gmail.com',        false, true, '1686300364887'),
  (DEFAULT, 'Customer5', '380981112233', 'depoistu',     'customer5@gmail.com',        false, true, '1686300364887');

INSERT INTO COMPANY (id, customer_id, name, phone1, phone2, phone3, city_id, street, join_date, schedule, photos) VALUES
    (1, 1, 'Родичі',              '380661005878', '', '', '2304', 'Vulytsya Odesʹka, 50',              '22.05.2020', '09:00-21:00, 09:00-21:00, 09:00-21:00, 09:00-21:00, 09:00-21:00, 09:00-21:00, 09:00-21:00', '');

INSERT INTO MENU_ITEM (ID,        CATEGORY_ID, COMPANY_ID, IS_VISIBLE, NAME,                                                DESCRIPTION,                                                                                                            COOKING_TIME,   SIZE,             PRICE,    IMAGE_URL) VALUES
                      (default,   1,           1,          1,          'Яєчня оката/омлет/скрембл (на вибір)',              'з беконом, картоплею та хрустким тостом',                                                                              '10',           '250',            190,      ''),
                      (default,   1,           1,          1,          'Селянський сніданок',                               'з домашньою ковбасою, салатом з помідорів та картопленю зі шкварками',                                                 '15',           '400',            250,      ''),
                      (default,   1,           1,          1,          'Яйця Бенедикт',                                     'на хрусткому тості з лососем гравлакс/хамом (на вибір) томатами, салатом і соусом голландез',                          '15',           '250',            320,      ''),
                      (default,   1,           1,          1,          'Млинець з м''ясом',                                 'з грибним соусом',                                                                                                     '15',           '250',            195,      ''),
                      (default,   1,           1,          1,          'Каша вівсяна',                                      'на курячому бульйоні з яйцем пашот та сиром',                                                                          '15',           '250',            140,      ''),
                      (default,   1,           1,          1,          'Каша вівсяна',                                      'з гороховим праліне та морозивом',                                                                                     '15',           '250',            140,      ''),
                      (default,   1,           1,          1,          'Млинці з шоколадом, сиром та сметаною',             '',                                                                                                                     '15',           '200/50',         195,      ''),
                      (default,   1,           1,          1,          'Сирники домашні',                                   'з сметаною та джемом',                                                                                                 '15',           '150/30/30',      225,      ''),
                      (default,   5,           1,          1,          'Маритури з овочів',                                 'пелюстка з капусти, огірок, томат, слива, часник',                                                                     '15',           '300',            150,      ''),
                      (default,   5,           1,          1,          'Тарілка Українських крафтових сирів',               '(Львівський сир Чеддер, Селиський сир, Хуст, нарциз Карпат) з трюфельним медом',                                       '15',           '120/30',         330,      ''),
                      (default,   5,           1,          1,          'Форшмак',                                           'з печеним яблуком',                                                                                                    '15',           '200/50',         220,      ''),
                      (default,   5,           1,          1,          'Українське севіче з товстолоба',                    'з обліпиховим соусом',                                                                                                 '15',           '150',            185,      ''),
                      (default,   5,           1,          1,          'Рибне асорті',                                      'лосось гравлакс, сом копчений, масляна',                                                                               '15',           '150',            495,      ''),
                      (default,   5,           1,          1,          'Пате з курячої печінки',                            'з апельсиновам маслом та ноткою трюфеля',                                                                              '15',           '150/50',         180,      ''),
                      (default,   5,           1,          1,          'Холодець з мʼяса птиці',                            'з хріном',                                                                                                             '15',           '250',            190,      ''),
                      (default,   5,           1,          1,          'Асорті Жашківського сала',                          'сало свіже, копчене, запечене, масло з сала',                                                                          '15',           '200',            255,      ''),
                      (default,   5,           1,          1,          'Дошка Українського мʼяса',                          'ростбіф, ковбаса печена, буженина, пікниця, шовдарь',                                                                  '15',           '250',            370,      ''),
                      (default,   5,           1,          1,          'Тар-тар з телятини',                                'з томатним джемом та вершково-часниковим соусом',                                                                      '15',           '150/50',         260,      ''),
                      (default,   41,          1,          1,          'Деруни',                                            'з лососем гравлакс та сметаною',                                                                                       '15',           '200/30/30',      220,      ''),
                      (default,   41,          1,          1,          'Деруни',                                            'з джемом з бекону та сметаною',                                                                                        '15',           '200/50/30',      150,      ''),
                      (default,   41,          1,          1,          'Сир Хуст',                                          'в хрусткій кукурудзяній скоринці',                                                                                     '15',           '150/30',         240,      ''),
                      (default,   41,          1,          1,          'Піца паляниця з курячими сердечками',               '',                                                                                                                     '15',           '350',            290,      ''),
                      (default,   41,          1,          1,          'Міні-голубці',                                      'з томатним карі та сметаною',                                                                                          '15',           '200/30',         155,      ''),
                      (default,   41,          1,          1,          'Пиріг Франка',                                      '',                                                                                                                     '15',           '200',            180,      ''),
                      (default,   41,          1,          1,          'Короп смажений по-азіатськи',                       '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   18,          1,          1,          'Мікс салат',                                        'з желе з апельсинового фрешу та соусом з кешʼю',                                                                       '15',           '200',            220,      ''),
                      (default,   18,          1,          1,          'Салат Грецький',                                    'з топінадою з маслин',                                                                                                 '15',           '220',            175,      ''),
                      (default,   18,          1,          1,          'Салат з морепродуктами',                            'з креветкою, кальмаом та лососем гравлакс',                                                                            '15',           '200',            400,      ''),
                      (default,   18,          1,          1,          'Салат Айсберг',                                     'з куркою в хрусткій паніровці',                                                                                        '15',           '200',            250,      ''),
                      (default,   18,          1,          1,          'Олівʼє',                                            'з бужениною та зеленим яблуком',                                                                                       '15',           '200',            150,      ''),
                      (default,   18,          1,          1,          'Стейк салат',                                       'з соусом папрік та рисовим снігом',                                                                                    '15',           '200',            250,      ''),
                      (default,   35,          1,          1,          'Борщ український червоний',                         'з тостом, салом та сметаною',                                                                                          '15',           '400/100',        180,      ''),
                      (default,   35,          1,          1,          'Навариста юшка з бараниною',                        'та овочами',                                                                                                           '15',           '400',            160,      ''),
                      (default,   35,          1,          1,          'Солянка мʼясна',                                    'зі сметаною',                                                                                                          '15',           '350/50',         250,      ''),
                      (default,   35,          1,          1,          'Бограч на вогні',                                   'зі свининою та перцем',                                                                                                '15',           '400',            180,      ''),
                      (default,   35,          1,          1,          'Курячий бульйон',                                   'з домашньою локшиною',                                                                                                 '15',           '350',            150,      ''),
                      (default,   35,          1,          1,          'Українська щерба',                                  'з пастою том-ям(лосось, судак, мідія, креветка)',                                                                      '15',           '300',            340,      ''),
                      (default,   35,          1,          1,          'Крем-суп з білих овочів',                           'з шовдарем і попкорном',                                                                                               '15',           '300',            160,      ''),
                      (default,   6,           1,          1,          'Картопля фрі/селянська(на вибір)',                  'з вершково-гірчичним соусом',                                                                                          '15',           '150/30',         105,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
                      (default,   6,           1,          1,          '',                                                  '',                                                                                                                     '15',           '200',            400,      ''),
;

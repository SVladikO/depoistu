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
;

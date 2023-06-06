-- IF you forged to add ; in the end
-- or
-- added extra , in the enx script wont work


INSERT INTO CUSTOMER (id, name, phone, password, email, is_verified_phone, is_verified_email, join_date) VALUES
  (DEFAULT, 'Master',  970668830, 'masterMaster', ' masterMaster@gmail.com ', false, false, 167233),


INSERT INTO COMPANY (id, customer_id, name, phone, city, street, join_date, schedule, photos) VALUES
  (DEFAULT, 1, 'АрмАто',      '0665784567',  'Вінниця',  'Вінницька, 15',     '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,',                         'https://cdn.pixabay.com/photo/2017/08/02/00/05/places-2568876__340.jpg, https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317__340.jpg, https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984__340.jpg'),
  (DEFAULT, 1, 'ПіццаМанія',  '0665784568',  'Вінниця',  'Теліги, 17',        '22.05.2020', '08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00, 08:00-21:00,,',                         'https://cdn.pixabay.com/photo/2020/03/30/10/18/electric-scooter-4983759__340.jpg'),

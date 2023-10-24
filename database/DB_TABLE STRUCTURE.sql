CREATE TABLE MENU_ITEM
(
    ID           SERIAL       NOT NULL,
    CATEGORY_ID  INT          NOT NULL,
    COMPANY_ID   INT          NOT NULL,
    NAME         CHAR(100)     NOT NULL,
    IS_VISIBLE   BOOLEAN      NOT NULL,
    DESCRIPTION  CHAR(255),
    SIZE_1       CHAR(20)     NOT NULL,
    PRICE_1      CHAR(20)     NOT NULL,
    SIZE_2       CHAR(20),
    PRICE_2      CHAR(20),
    SIZE_3       CHAR(20),
    PRICE_3      CHAR(20),
    IMAGE_URL    VARCHAR(400) NOT NULL
);

CREATE TABLE CUSTOMER
(
    ID                   SERIAL   NOT NULL,
    NAME                 CHAR(30) NOT NULL,
    PHONE                CHAR(12) NOT NULL,
    PASSWORD             CHAR(12) NOT NULL,
    EMAIL                CHAR(30) NOT NULL,
    IS_VERIFIED_PHONE    BOOLEAN,
    IS_VERIFIED_EMAIL    BOOLEAN,
    JOIN_DATE            CHAR(14),
    IS_BUSINESS_OWNER    BOOLEAN,
    CAN_CREATE_COMPANIES TINYINT  NOT NULL
);

CREATE TABLE COMPANY
(
    ID          SERIAL    NOT NULL,
    CUSTOMER_ID INT       NOT NULL,
    NAME        CHAR(30)  NOT NULL,
    PHONE1      CHAR(12)  NOT NULL,
    PHONE2      CHAR(12),
    PHONE3      CHAR(12),
    CITY_ID     CHAR(5)   NOT NULL,
    STREET      CHAR(60)  NOT NULL,
    JOIN_DATE   CHAR(14),
    SCHEDULE    CHAR(100) NOT NULL,
    PHOTOS      VARCHAR(5000)
);

CREATE TABLE FAVORITE_COMPANY
(
    CUSTOMER_ID   INT    NOT NULL,
    COMPANY_ID    INT    NOT NULL
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
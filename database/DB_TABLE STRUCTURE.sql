
CREATE TABLE MENU_ITEM
(
    ID           SERIAL        NOT NULL,
    CATEGORY_ID  INT           NOT NULL,
    COMPANY_ID   INT           NOT NULL,
    NAME         CHAR(30)      NOT NULL,
    DESCRIPTION  CHAR(255),
    COOKING_TIME CHAR(2)       NOT NULL,
    PRICE        CHAR(7)       NOT NULL,
    SIZE         CHAR(4)       NOT NULL,
    IMAGE_URL    VARCHAR(400)  NOT NULL
);

CREATE TABLE CUSTOMER
(
    ID                SERIAL    NOT NULL,
    NAME              CHAR(30)  NOT NULL,
    PHONE             CHAR(12)  NOT NULL,
    PASSWORD          CHAR(12)  NOT NULL,
    EMAIL             CHAR(30),
    IS_VERIFIED_PHONE BOOLEAN,
    IS_VERIFIED_EMAIL BOOLEAN,
    JOIN_DATE         CHAR(14)
);

CREATE TABLE COMPANY
(
    ID          SERIAL     NOT NULL,
    CUSTOMER_ID INT        NOT NULL,
    NAME        CHAR(30)   NOT NULL,
    PHONE       CHAR(12)   NOT NULL,
    CITY_ID     CHAR(5)    NOT NULL,
    STREET      CHAR(30)   NOT NULL,
    JOIN_DATE   CHAR(14),
    SCHEDULE    CHAR(100)  NOT NULL,
    PHOTOS      VARCHAR(5000)
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
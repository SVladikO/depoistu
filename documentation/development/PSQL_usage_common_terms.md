FROM `https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm`

## run in terminal after connection to db

#### 1. `\l`          - show db list

#### 1. `\c testdb`   - connect to desired db

#### 1. `help`        - for help

#### 1. `\q`          - exit from db

#### 1. `DROP DATABASE [ IF EXISTS ] name`  - delete database (possible only if no one connected to this DB and you should not be connected to this db too)

#### 1. `dropdb  [option...] dbname`        - delete database

## Tables

##### 1. Create table common example:

`CREATE TABLE table_name(
column1 datatype,
column2 datatype,
column3 datatype,
.....
columnN datatype,
PRIMARY KEY( one or more columns )
);`

#### 2. Create table more detailed example:

`
CREATE TABLE COMPANY(
ID INT PRIMARY KEY     NOT NULL,
NAME           TEXT    NOT NULL,
AGE            INT     NOT NULL,
ADDRESS        CHAR(50),
SALARY         REAL
);`

#### 3. `\d`                         - show table list

#### 4. `\d company`                 - show table details

#### 5. `DROP TABLE table_name`      - delete table

#### 6. `DROP TABLE table1, table2`  - delete few tables

## CREATE SCHEMA (analog of directory)

#### 1. `CREATE SCHEMA myschema`               - create schema

#### 2. `CREATE TABLE myschema.mytable (...)` - crete table inside schema

#### 3. `select * from myschema.company` - show all from myschema.company;

#### 4. `DROP SCHEMA myschema`            - delete empty schema

#### 5. `DROP SCHEMA myschema CASCADE`    - delete schema with all inside

## INSERT

#### 1. Insert in specific columns

`INSERT INTO TABLE_NAME (column1, column2, column3,...columnN)
VALUES (value1, value2, value3,...valueN);`

#### 2. Insert in all columns (the order of values the same as the columns)

`INSERT INTO TABLE_NAME VALUES (value1,value2,value3,...valueN);`

#### 3. Insert in few rows

`
INSERT INTO COMPANY
(ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE)
VALUES
(4, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ),
(5, 'David', 27, 'Texas', 85000.00, '2007-12-13');
`

## SELECT

#### 1. `SELECT column1, column FROM table_name;`

#### 1. `SELECT * FROM table_name;`

## OPERATORS
AND, OR, >, <, =, !=
#### 1
`SELECT column1, column2, columnN
FROM table_name
WHERE [condition1] AND [condition2]...AND [conditionN];`

#### 2
`SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;`
`SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;` 
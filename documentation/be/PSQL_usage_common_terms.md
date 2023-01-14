

###### [PSQL tutorial](https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm)


## You can run in terminal after connection to db

## SHOW
1. db list `\l`
2. tables `\d`  in public schema, or default 
3. tables `\dt` in public schema, or default
4. table details `\d root.guest` in public schema, or default    
6. table in schema `select * from myschema.company;`
7. tables per schema `\dt public.*`
8. schemas `SELECT schema_name FROM information_schema.schemata;`
9. schemas  `SELECT nspname FROM pg_catalog.pg_namespace;`

## CREATE
1. schema `CREATE SCHEMA myschema;`   
2. table inside schema `CREATE TABLE myschema.mytable (...);`

## DELETE 
1. database `DROP DATABASE [ IF EXISTS ] name;`  (possible only if no one connected to this DB and you should not be connected to this db too)
2. database `dropdb  [option...] dbname;` 
3. table `DROP TABLE table_name;`
4. tables `DROP TABLE table1, table2;` 
5. schema `DROP SCHEMA myschema;`  
6. schema with content `DROP SCHEMA myschema CASCADE;`


## INSERT

1. Insert in specific columns
######
`INSERT INTO schema.TABLE_NAME (id, column1, column2, column3,...columnN)
VALUES (DEFAULT, value1, value2, value3,...valueN);`

2. Insert in all columns (the order of values the same as the columns)
######
`INSERT INTO schema.TABLE_NAME VALUES (DEFAULT, value1,value2,value3,...valueN);`

3. Insert in few rows
######
`
INSERT INTO schema.COMPANY
(ID,NAME,AGE,ADDRESS,SALARY,JOIN_DATE)
VALUES
(DEFAULT, 'Mark', 25, 'Rich-Mond ', 65000.00, '2007-12-13' ),
(DEFAULT, 'David', 27, 'Texas', 85000.00, '2007-12-13');
`
## SELECT

1. Few fields `SELECT column1, column FROM schema.table_name;`
2. All fields `SELECT * FROM table_name;`

## OPERATORS
AND, OR, >, <, =, !=

#### Example 1
# `SELECT column1, column2, columnN FROM table_name WHERE [condition1] AND [condition2]...AND [conditionN];`
# `SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;`
# `SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;` 
# `SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;`
# `SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;`
# `SELECT * FROM COMPANY WHERE SALARY = 10000;`
# `SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27;` // BETWEEN
# `SELECT * FROM COMPANY WHERE AGE IN ( 25, 27 );` // ONE OF 25 or 27 
# `SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;` // OR
### connect db `\c testdb`
### exit db `\q`
### help  `\?`
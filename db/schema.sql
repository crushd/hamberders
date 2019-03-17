DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int(11) auto_increment primary key,
    burger_name varchar(64),
    devoured boolean default false
);


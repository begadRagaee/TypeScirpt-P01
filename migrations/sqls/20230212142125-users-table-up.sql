-- create table users
CREATE TABLE users
( 
  id SERIAL PRIMARY KEY,
  email varchar(50) UNIQUE,
  username varchar(50) NOT NULL,
  frist_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  password varchar(255) NOT NULL
);

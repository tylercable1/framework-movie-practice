CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  title varchar(40)  NOT NULL,
  -- information varchar(20),
  PRIMARY KEY (ID)
);
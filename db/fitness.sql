DROP DATABASE IF EXISTS  fitness_db ;
CREATE DATABASE fitness_db;
USE fitness_db;

CREATE TABLE IF NOT EXISTS weights (
    id INT AUTO_INCREMENT,
    createdAt DATETIME,
    updatedAt DATETIME,
    weight INT,
	PRIMARY KEY (id)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
 

USE fitness_db;
SELECT * FROM weights;
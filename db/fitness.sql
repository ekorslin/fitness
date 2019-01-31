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

CREATE TABLE IF NOT EXISTS exercises (
    id INT AUTO_INCREMENT,
    createdAt DATETIME,
    updatedAt DATETIME,
    description VARCHAR(255) NOT NULL,
    bodyGroup VARCHAR(255) NOT NULL,
    weight INT,
    sets INT,
    reps INT,
	PRIMARY KEY (id)
);


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
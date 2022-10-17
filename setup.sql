DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS parks CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE parks (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  park_name VARCHAR,
  park_location VARCHAR,
  park_description VARCHAR,
  park_image VARCHAR
);

INSERT INTO users (email, password_hash) VALUES
('test@gmail.com', '123456'),
('test1@gmail.com', 'password');

INSERT INTO parks (park_name, park_location, park_image, park_description) VALUES
('my park','boulder','insert photo here','mock info for testing')
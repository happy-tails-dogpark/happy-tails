DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);


INSERT INTO users (email, password_hash) VALUES
('test@gmail.com', '123456'),
('test1@gmail.com', 'password')

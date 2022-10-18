DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  age VARCHAR,
  name VARCHAR,
  breed VARCHAR,
  image VARCHAR
);

INSERT INTO users (email, password_hash) VALUES
('colter@gmail.com', '123456'),
('amanda@gmail.com', '123456'),
('mariah@gmail.com', '123456');

INSERT INTO dogs (age, name, breed, image) VALUES
('1', 'Ozujsko', 'mutt', 'Good dog image'),
('9', 'Arya', 'Coon Hound', 'Good girl image'),
('5', 'Boulder', 'Pit-mix', 'Good pup image'),
('0.5', 'Bruce', 'Pit-mix', 'Heckin good boy image')
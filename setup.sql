DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL
);

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id BIGINT,
  age VARCHAR,
  name VARCHAR,
  breed VARCHAR,
  image VARCHAR,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (email, password_hash) VALUES
('colter@gmail.com', '123456'),
('amanda@gmail.com', '123456'),
('mariah@gmail.com', '123456');

INSERT INTO dogs (user_id, age, name, breed, image) VALUES
('1', '1', 'Ozujsko', 'mutt', 'Good dog image'),
('2', '9', 'Arya', 'Coon Hound', 'Good girl image'),
('3', '0.5', 'Bruce', 'Pit-mix', 'Heckin good boy image')
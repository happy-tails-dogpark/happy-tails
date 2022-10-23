/* eslint-disable no-undef */
const pool = require('../utils/pool');

class Dog {
  id;
  name;
  age;
  breed;
  birthday;
  image;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.breed = row.breed;
    this.birthday = row.birthday;
    this.image = row.image;
  }

  static async getAllDogs() {
    const { rows } = await pool.query(
      `
        SELECT * FROM dogs;
        `
    ); return rows.map((row) => new Dog(row));
  }

  static async getDogById(id) {
    const { rows } = await pool.query(
      `
          SELECT * FROM dogs WHERE id = $1;
          `, [id]
    ); if (rows.length === 0) {
      return null;
    }return new Dog(rows[0]);
  }

  static async addDog({ name, age, breed, birthday, image }, { id }) {
    // eslint-disable-next-line max-len
    const { rows } = await pool.query(
      `
        INSERT INTO dogs (name, age, breed, birthday, image, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING * 
      `,
      [name, age, breed, birthday, image, id]
    ); return new Dog(rows[0]);
  }

  static async getProfileById(id) {
    const { rows } = await pool.query(
      `
          SELECT * FROM dogs WHERE user_id = $1;
          `, [id]
    ); if (rows.length === 0) {
      return null;
    }return new Dog(rows[0]);
  }
}

module.exports = Dog;

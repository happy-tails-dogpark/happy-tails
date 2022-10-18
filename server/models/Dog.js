const pool = require('../utils/pool');

class Dog {
  id;
  name;
  age;
  breed;
  image;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.breed = row.breed;
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
    console.log('getDogById(id)', id);
    const { rows } = await pool.query(
      `
          SELECT * FROM dogs WHERE id = $1;
          `, [id]
    ); if (rows.length === 0) {
      return null;
    }return new Dog(rows[0]);
  }

  static async addDog({ name, age, breed, image }, { id }) {
    // eslint-disable-next-line max-len
    console.log('addDog({ name, age, breed, image }, { id })', { name, age, breed, image }, { id });
    const { rows } = await pool.query(
      `
        INSERT INTO dogs (name, age, breed, image, user_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING * 
      `,
      [name, age, breed, image, id]
    ); return new Dog(rows[0]);
  }

  static async getProfileById(id) {
    console.log('getProfileById(id)', id);
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

const pool = require('../utils/pool');

class Dog {
  id;
  name;
  age;
  breed;
  image;
  user_id;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.breed = row.breed;
    this.image = row.image;
    this.user_id = row.user_id;
  }

  static async getAllDogs() {
    const { rows } = await pool.query(
      `
        SELECT * FROM dogs;
        `
    ); return rows.maps((row) => new Dog(row));
  }

  static async getDogById(id) {
    const { rows } = await pool.query(
      `
          SELECT * FROM dogs WHERE id = $1;
          `, [id]
    ); if (rows.legnth === 0) {
      return null;
    }return new Dog(rows[0]);
  }

  static async addDog({ user_id, name, age, breed, image }) {
    const { rows } = await pool.query(
      `
        INSERT INTO dogs (user_id, name, age, breed, image)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING * 
      `,
      [user_id, name, age, breed, image]
    ); return new Dog(rows[0]);
  }
}

module.exports = { Dog };

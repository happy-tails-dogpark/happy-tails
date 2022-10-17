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
    ); return rows.maps((row) => new Dog(row));
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

  static async addDog({ name, age, breed, image }) {
    const { rows } = await pool.query(
      `
        INSERT INTO dogs (name, age, breed, image)
        VALUES ($1, $2, $3, $4)
        RETURNING * 
      `,
      [name, age, breed, image]
    ); return new Dog(rows[0]);
  }
}

module.exports = Dog;

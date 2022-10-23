const pool = require('../utils/pool');

class Park {
  id;
  parkName;
  parkLocation;
  parkDescription;
  parkImage;

  constructor(row) {
    this.id = row.id;
    this.parkName = row.parkName;
    this.parkDescription = row.parkDescription;
    this.parkLocation = row.parkLocation;
    this.parkImage = row.parkImage;
  }
  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM parks;
        `
    ); return rows.maps((row) => new Park(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
          SELECT * FROM parks WHERE id = $1;
          `, [id]
    ); if (rows.legnth === 0) {
      return null;
    }return new Park(rows[0]);
  }
}
//end of class
module.exports = { Park };

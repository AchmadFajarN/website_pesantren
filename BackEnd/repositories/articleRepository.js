const pool = require('../config/db');

class ArticleRepository {
  async create(articleData) {
    const query = `
      INSERT INTO articles (title, header, date, author, body, photo)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    const values = [
      articleData.title,
      articleData.header,
      articleData.date,
      articleData.author,
      articleData.body,
      articleData.photo,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM articles ORDER BY date DESC');
    return rows;
  }

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM articles WHERE id = $1', [id]);
    return rows[0];
  }

  async update(id, articleData) {
    const query = `
      UPDATE articles
      SET title = $1, header = $2, date = $3, author = $4, body = $5, photo = $6
      WHERE id = $7
      RETURNING *
    `;
    const values = [
      articleData.title,
      articleData.header,
      articleData.date,
      articleData.author,
      articleData.body,
      articleData.photo,
      id,
    ];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async delete(id) {
    await pool.query('DELETE FROM articles WHERE id = $1', [id]);
  }
}

module.exports = new ArticleRepository();
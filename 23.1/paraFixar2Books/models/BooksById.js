const connection = require('../sql/connection');

const BooksById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id=?', [id]);

  if (book.length === 0) return null;

  return book;
}

module.exports = BooksById;
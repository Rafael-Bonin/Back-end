const connection = require('../sql/connection');

const BooksAuthorId = async (id) => {
  const [BooksId] = await connection.execute('SELECT * FROM books WHERE author_id=?', [id]);

  if (BooksId.length === 0) return null;

  return BooksId.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }));
}

module.exports = BooksAuthorId;
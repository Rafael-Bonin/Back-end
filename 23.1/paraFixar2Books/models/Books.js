const connection = require('../sql/connection');

const serialize = (data) => {
  return {
    id: data.id,
    title: data.title,
    authorId: data.author_id,
  }
}

const Books = async () => {
  const [result] = await connection.execute('SELECT * FROM books');

  return result.map(serialize);
}

module.exports = Books;
const byId = require('../models/BooksById');

const booksByIdMdw = async (req, res) => {
  const { id } = req.params;

  const ids = await byId(id);

  if (!ids) return res.status(404).json({ message: 'nao foram encontrados livros com esse Id' });

  return res.status(200).json(ids);
}

module.exports = booksByIdMdw;
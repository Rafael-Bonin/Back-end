const allBooks = require('../models/Books');
const byId = require('../models/BooksAuthorId');

const allBooksMdw = async (req, res) => {
  const { id } = req.query;
  const all = await allBooks();


  if (id) {
    const ids = await byId(id)
    return res.status(200).json(ids)
  };

  return res.status(200).json(all);
}

module.exports = allBooksMdw;
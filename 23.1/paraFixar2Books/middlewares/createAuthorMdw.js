const validation = require('../helpers/isValid');
const createAuthor = require('../models/createAuthor');

const createAuthorMdw = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const ok = validation(first_name, last_name);

  if (!ok) return res.status(400).json({ message: 'dados invalidos' });

  const insert = await createAuthor(first_name, middle_name, last_name);

  return res.status(200).json(insert);
}

module.exports = createAuthorMdw;
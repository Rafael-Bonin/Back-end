const all = require('../models/allAuthors');

const getAllMdw = async (req, res) => {
  const todos = await all();
  return res.status(200).json(todos);
}

module.exports = getAllMdw
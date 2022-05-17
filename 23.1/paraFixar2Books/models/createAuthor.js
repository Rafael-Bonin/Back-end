const connection = require('../sql/connection');

const createAuthor = async (firstName, middleName = null, lastName) => (
  connection.execute('INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)', [firstName, middleName, lastName])
);

module.exports = createAuthor;
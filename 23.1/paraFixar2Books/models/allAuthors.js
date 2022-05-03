const connection = require('../sql/connection');

const getFullname = ({ id, firstName, middleName, lastName }) => {
  const fullName = [ firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
}

// para organizar o nome das chaves com camel case
const serialize = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    middleName: data.middle_name,
    lastName: data.last_name,
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM authors');

  // o primeiro .map e para fazer ajustes nos nomes das chaves.
  // o segundos .map e para criar uma nova chave com informacoes ja existentes.
  return result.map(serialize).map(getFullname);
};

module.exports = getAll;

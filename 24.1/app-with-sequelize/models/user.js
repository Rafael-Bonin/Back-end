const User = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    mother_name: DataTypes.STRING,
  });
  return User;
};
// https://sequelize.org/docs/v6/other-topics/query-interface/
module.exports = User;
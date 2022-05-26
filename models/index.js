'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

console.log(config)

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
// const sequelize = new Sequelize('postgres://xhegyxcvfkfbeg:a8977b67913c4f7a45d1e7cb1b4acfa9d85e364ba4e6929151f3923ae6715712@ec2-52-86-115-245.compute-1.amazonaws.com:5432/d2t21finm4qipn');

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

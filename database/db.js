const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('letspa08_estagio', 'letspa08_estagio', 'Kj*q48j5dg}u', {
  host: 'letspartygo.com',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

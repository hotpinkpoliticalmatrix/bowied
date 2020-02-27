const Sequelize = require('sequelize');
const db = require('./database')

const Bowie = db.define('bowie', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  source: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Bowie

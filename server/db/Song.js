const Sequelize = require('sequelize');
const db = require('./database');

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  audioUrl: {
    type: Sequelize.TEXT
  },
  length: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  source: {
    type: Sequelize.TEXT
  },
  releaseDate: {
    type: Sequelize.STRING
  },
  songwriter: {
    type: Sequelize.TEXT
  },
  single: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})


module.exports = Song

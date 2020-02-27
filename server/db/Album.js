const Sequelize = require('sequelize');
const db = require('./database');

const Album = db.define('album', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  albumArt: {
    type: Sequelize.TEXT
  },
  albumUrl: {
    type: Sequelize.TEXT
  },
  releaseDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  source: {
    type: Sequelize.TEXT
  },
  genre: {
    type: Sequelize.STRING
  },
  length: {
    type: Sequelize.STRING
  },
  label: {
    type: Sequelize.STRING
  },
  producer: {
    type: Sequelize.STRING
  },
})

module.exports = Album

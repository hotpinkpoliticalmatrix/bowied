const db = require('./database');
const Album = require('./Album');
const Song = require('./Song');
const Bowie = require('./Bowie');

Bowie.hasMany(Song);
Song.belongsTo(Album);
Album.belongsTo(Bowie);
Bowie.hasMany(Album);
Album.hasMany(Song);
Song.belongsTo(Bowie)

module.exports = {
  db,
  Album,
  Bowie,
  Song
}

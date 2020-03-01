const router = require('express').Router()
const {Song, Album, Bowie} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    let songs = await Song.findAll({
      include: [
        {
          model: Bowie,
          attributes: [
            "name",
            "imageUrl",
          ]
        }
      ]
    });
    if (songs) {
      res.send(songs).status(200)
    } else {
      res.sendStatus(404)
    }
  } catch(err) {
    next(err)
  }
})


router.get('/:songId', async (req, res, next) => {
  try {
    let song = await Song.findByPk(req.params.songId, {
      include: [
        {
          model: Bowie,
          attributes: [
            "name",
            "imageUrl",
          ]
        }
      ]
    });
    if (song) {
      res.send(song).status(200)
    } else {
      res.sendStatus(404)
    }
  } catch(err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const {} = req.body
//   }
// })

module.exports = router

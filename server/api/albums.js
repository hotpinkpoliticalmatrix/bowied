const router = require("express").Router();
const {Album} = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll();
    if (albums) {
      res.status(200).send(albums);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.get('/:albumId', async (req, res, next) => {
  try {
    let album = await Album.findByPk(req.params.albumId);
    if (album) {
      res.status(200).send(album);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

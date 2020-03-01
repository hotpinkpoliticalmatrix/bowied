const router = require("express").Router();
const {Album, Song} = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [
        {
          model: Song,
          attributes: [
            "name",
            "audioUrl",
            "length",
            "genre",
            "description",
            "source",
            "releaseDate",
            "songwriter",
            "single",
          ]
        }
      ]
    });
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
    let album = await Album.findByPk(req.params.albumId, {
      include: [
        {
          model: Song,
          attributes: [
            "name",
            "audioUrl",
            "length",
            "genre",
            "description",
            "source",
            "releaseDate",
            "songwriter",
            "single",
          ]
        }
      ]
    });
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

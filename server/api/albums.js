const router = require("express").Router();
const { Album, Song } = require("../db");

//all albums
router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [
        {
          model: Song,
          attributes: [
            "id",
            "name",
            "audioUrl",
            "length",
            "genre",
            "description",
            "source",
            "releaseDate",
            "songwriter",
            "single"
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

//album by bowie
router.get("/:albumId/", async (req, res, next) => {
  try {
    let album = await Album.findAll({
      include: [
        {
          model: Song,
          order: "trackNumber DESC",
          attributes: [
            "id",
            "name",
            "trackNumber",
            "audioUrl",
            "length",
            "genre",
            "description",
            "source",
            "releaseDate",
            "songwriter",
            "single"
          ]

        }
      ],
      where: {
        id: req.params.albumId
      }
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

router.get("/single/:albumId", async (req, res, next) => {
  try {
    let album = await Album.findByPk(req.params.albumId, {
      include: [
        {
          model: Song,
          attributes: [
            "id",
            "name",
            "trackNumber",
            "audioUrl",
            "length",
            "genre",
            "description",
            "source",
            "releaseDate",
            "songwriter",
            "single"
          ],
          order: ["trackNumber", "DESC"]
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

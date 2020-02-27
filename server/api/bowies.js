const router = require('express').Router();
const { Bowie, Album } = require("../db");
console.log(Bowie)

router.get('/', async (req, res, next) => {
  try {
    let bowies = await Bowie.findAll({
      include: [{
        model: Album
      }]
    });
    if (bowies) {
      res.status(200).send(bowies);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.get('/:bowieId', async(req,res,next) => {
  try {
    const bowie = await Bowie.findByPk(req.params.bowieId)
    if (bowie) {
      res.status(200).send(bowie)
    } else {
      res.sendStatus(404)
    }
  } catch(err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let newBowie = {};
    let {name, description, source, imageUrl} = req.body;
    if (name) newBowie.name = name;
    if (description) newBowie.description = description;
    if (source) newBowie.source = source;
    if (imageUrl) newBowie.imageUrl = imageUrl;
    let createdBowie = await Bowie.create(newBowie);
    if (createdBowie) {
      res.status(204).send(createdBowie)
    } else {
      res.sendStatus(400)
    }
  } catch(err) {
    next(err)
  }
})

module.exports = router;

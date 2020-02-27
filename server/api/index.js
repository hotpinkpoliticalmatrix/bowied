const router = require('express').Router();

router.use('/songs', require('./songs'))
router.use('/albums', require('./albums'));
router.use('/bowies', require('./bowies'))

router.get('/', async(req, res, next) => {
  res.status(200).send("I'm an alligator")
  // const err = new Error('I\'m an APIgator! I have an API error for you!')
  // err.status = 404
  // next(err)
})

module.exports = router;

//user facing routes will be here

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
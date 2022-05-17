const router = require('express').Router();
const { User, Review } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {

  User.findAll({
    // exclude password
    attributes: { exclude: ['password'] }
  })
  // then send the data to the user as json 
  .then(dbPostData => {
    console.log(dbPostData[0]);
    // pass a single post object into the homepage template
    res.render('homepage');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  })
router.get('/login', (req, res) => {
  User.findAll({
    // exclude password
    attributes: { exclude: ['password'] }
  })
  // then send the data to the user as json
  .then(dbPostData => {
    console.log(dbPostData[0]);
    // pass a single post object into the homepage template
    res.render('login');
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
module.exports = router;










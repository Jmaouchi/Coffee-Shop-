const router = require('express').Router();
const { User } = require('../../models')

router.get('/', (req, res) => {

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
});

module.exports = router;
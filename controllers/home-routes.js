const router = require('express').Router();
const { User, Review } = require('../models');
const withAuth = require('../utils/auth')
<<<<<<< HEAD

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
=======
router.get('/',withAuth, (req, res) => {
    console.log('======================');
    Review.findAll({
        attributes: [
            'id',
            'review_text',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
  .then(reviews => {
    const reviewsdata = reviews.map(review => review.get({ plain: true }));
    console.log('review data is' , reviewsdata);
    res.render('homepage', { reviewsdata });
>>>>>>> 44501217e46784a57c9f739d72705de3386c106a
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










const router = require('express').Router();
const { User, Review, Items } = require('../models');
const withAuth = require('../utils/auth');

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
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/lo',withAuth, (req, res) => {
  console.log('======================');
  Items.findAll({
    attributes: [
      'id', 'item_name', 'item_price', 'item_image', 'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(items => {
      const itemsData = items.map(item => item.get({ plain: true }));
      res.render('homepage', { itemsData });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


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
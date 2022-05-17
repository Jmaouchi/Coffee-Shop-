const router = require('express').Router();
const { User } = require('../models');


router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('login');
});

module.exports = router;

const router = require('express').Router();

//get all the routes from the api folder
const apiRoutes = require('./api');
const htmlRoutes = require('./home-routes');
const loginRoutes = require('./login-route');
// const itemHtmlRoutes = require('./items-html-route');


router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
router.use('/login', loginRoutes);
// router.use('/items', itemHtmlRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
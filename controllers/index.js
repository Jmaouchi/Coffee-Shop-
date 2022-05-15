const router = require('express').Router();

//get all the routes from the api folder 
const apiRoutes = require('./api');
const htmlRoutes = require('./home-routes');
const loginRoutes = require('./login-route');

router.use('/api', apiRoutes);
router.use('/html', htmlRoutes);
router.use('/login', loginRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
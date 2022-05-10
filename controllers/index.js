const router = require('express').Router();

//get all the routes from the api folder 
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlroutes');

router.use('/api', apiRoutes);
router.use('/html', htmlRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

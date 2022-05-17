const router = require('express').Router();

// get everything from the user-routes.js file, and we are exporting all the api routes 
const userRoutes = require('./users-route');
const reviewsRoutes = require('./reviews-route');


// use this router that starts with /users then the end of this endpoint will be in the api routes 
router.use('/users', userRoutes);
router.use('/reviews', reviewsRoutes);

module.exports = router;
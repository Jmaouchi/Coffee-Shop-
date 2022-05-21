const router = require('express').Router();

// get everything from the user-routes.js file, and we are exporting all the api routes 
const userRoutes = require('./users-route');
const reviewsRoutes = require('./reviews-route');
const itemsRoutes = require('./Items-route');


// use this router that starts with /users then the end of this endpoint will be in the api routes 
router.use('/users', userRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/items', itemsRoutes);

module.exports = router;
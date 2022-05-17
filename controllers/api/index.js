const router = require('express').Router();

// get everything from the user-routes.js file, and we are exporting all the api routes 
const userRoutes = require('./users-route');
<<<<<<< HEAD
const reviewRoutes = require('./reviews-route');

=======
const reviewsRoutes = require('./reviews-route');
>>>>>>> cd587ad8f51ba56920821a7d51623c6168b41bbb


// use this router that starts with /users then the end of this endpoint will be in the api routes 
router.use('/users', userRoutes);
<<<<<<< HEAD
router.use('/reviews', reviewRoutes);

=======
router.use('/reviews', reviewsRoutes);
>>>>>>> cd587ad8f51ba56920821a7d51623c6168b41bbb

module.exports = router;
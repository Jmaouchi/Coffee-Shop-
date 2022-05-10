const router = require('express').Router();

// get everything from the user-routes.js file, and we are exporting all the api routes 
const htmlRoutes= require('./html-routes');


// use this router that starts with /users then the end of this endpoint will be in the api routes 
router.use('/users', htmlRoutes);


module.exports = router;
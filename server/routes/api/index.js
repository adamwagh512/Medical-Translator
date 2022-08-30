const router = require('express').Router();
const usersRoutes = require('./userRoutes');

//requires /users in our search before we can access these routes
router.use('/users', usersRoutes);


module.exports = router;
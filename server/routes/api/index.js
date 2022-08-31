const router = require('express').Router();
const usersRoutes = require('./userRoutes');
const accountsRoutes = require('./accountRoutes')

//requires /users in our search before we can access these routes
router.use('/accounts', accountsRoutes);
router.use('/users', usersRoutes);


module.exports = router;
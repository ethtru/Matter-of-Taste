const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const createUserRoutes = require('./createUserRoutes')

router.use('/', homeRoutes);

module.exports = router;

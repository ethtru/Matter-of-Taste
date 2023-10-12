const homeRoutes = require('./homeRoutes');
const router = require('express').Router();

router.use('/', homeRoutes);

module.exports = router;
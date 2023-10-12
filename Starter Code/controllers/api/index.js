const router = require('express').Router();
const breakfastRoutes = require('./breakfastRoutes');
const lunchRoutes = require('./lunchRoutes');
const dinnerRoutes = require('./dinnerRoutes');
const dessertRoutes = require('./dessertRoutes');
const categoryRoutes = require('./categoryRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/breakfast', breakfastRoutes);
router.use('/lunch', lunchRoutes);
router.use('/dinner', dinnerRoutes);
router.use('/dessert', dessertRoutes);
router.use('/category', categoryRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;



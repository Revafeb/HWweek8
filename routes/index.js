const express = require('express');
const router = express.Router();
const filmRoutes = require('./film.routes');
const categoriesRoutes = require('./category.routes');

router.use('/films', filmRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;
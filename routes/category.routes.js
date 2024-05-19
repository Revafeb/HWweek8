const express = require('express');
const router = express.Router();
const CategoriesController = require('../controller/categories.controller');

router.get('/', CategoriesController.getAllCategories);

module.exports = router;
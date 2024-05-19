const express = require('express');
const router = express.Router();
const filmController = require('../controller/film.controller');

router.get('/category', filmController.getFilmByCategory);
router.get('/', filmController.getAllFilms);
router.get('/:id', filmController.getFilmById);

module.exports = router;
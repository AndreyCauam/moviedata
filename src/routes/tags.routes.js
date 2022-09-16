const { Router } = require('express')
const tagsRoutes = Router()

const Movie_TagsController = require('../controllers/movie_tagsController')
const movie_TagsController = new Movie_TagsController()

tagsRoutes.get('/:user_id', movie_TagsController.index)

module.exports = tagsRoutes

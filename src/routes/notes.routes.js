const { Router } = require('express')
const notesRoutes = Router()

const Movie_NotesController = require('../controllers/movie_notesController')
const movie_NotesController = new Movie_NotesController()

notesRoutes.post('/:user_id', movie_NotesController.create)

module.exports = notesRoutes

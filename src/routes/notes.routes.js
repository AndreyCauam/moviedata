const { Router } = require('express')
const notesRoutes = Router()

const Movie_NotesController = require('../controllers/movie_notesController')
const movie_NotesController = new Movie_NotesController()

notesRoutes.post('/:user_id', movie_NotesController.create)
notesRoutes.get('/:id', movie_NotesController.show)

module.exports = notesRoutes

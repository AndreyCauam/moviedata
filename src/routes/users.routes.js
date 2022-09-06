const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

// function myMiddleware(request, response, next) {
//   console.log('chama')
//   if (!request.body.isAdmin) {
//     return response.json({ message: 'user unauthorized' })
//   }
//   next()
// }

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)

module.exports = usersRoutes

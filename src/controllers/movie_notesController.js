const knex = require('../database/knex')

const AppError = require('../utils/AppError')

class movies_notesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body

    const { user_id } = request.params

    if (rating < 0 && rating > 5) {
      throw new AppError('O rating deve ser um valor entre o número 0 e 5')
    }

    const note_id = await knex('movies_notes').insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex('movie_tags').insert(tagsInsert)

    response.json()
  }
}

module.exports = movies_notesController

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class UsersController {
  // Create a new user
  public async store({ request, response }: HttpContextContract) {
    const payload = request.only([
      'fullName',
      'email',  
      'password',
      'nascimento',
      'matricula',
      'tipo',
    ])

    if (payload.password) {
      payload.password = await Hash.make(payload.password)
    }

    const user = await User.create(payload)
    return response.created(user)
  }

  // Show a single user
  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.notFound({ error: 'User not found' })
    }
    return user
  }

  // Update a user
  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.notFound({ error: 'User not found' })
    }

    const payload = request.only([
      'fullName',
      'email',
      'password',
      'nascimento',
      'matricula',
    ])

    if (payload.password) {
      payload.password = await Hash.make(payload.password)
    }

    user.merge(payload)
    await user.save()
    return user
  }

  // Delete a user
  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.notFound({ error: 'User not found' })
    }

    await user.delete()
    return response.noContent()
  }

  // Optional: list all users
  //public async index() {
    //return await User.all()
  }
}

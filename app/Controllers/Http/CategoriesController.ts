import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index() {
    return await Category.all()
  }

  public async store({ request }: HttpContextContract) {
    const data = new Category()
    data.name = request.input('name')
    const respons = await data.save()
    return respons
  }
}

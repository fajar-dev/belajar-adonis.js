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

  public async update({ params, request }: HttpContextContract) {
    const categoryId = params.id
    const data = await Category.findOrFail(categoryId)
    data.name = request.input('name')
    const respons = await data.save()
    return respons
  }

  public async destroy({ params }: HttpContextContract) {
    const categoryId = params.id
    const data = await Category.findOrFail(categoryId)
    const respons = await data.delete()
    return respons
  }
}

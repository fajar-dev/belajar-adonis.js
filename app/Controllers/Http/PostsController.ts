import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'

export default class PostsController {
  public async index() {
    return await Post.query().preload('category')
  }

  public async store({ request }: HttpContextContract) {
    const data = new Post()
    data.categoryId = request.input('categoryId')
    data.title = request.input('title')
    data.content = request.input('content')
    const response = await data.save()
    return response
  }

  public async update({ params, request }: HttpContextContract) {
    const postId = params.id
    const data = await Post.findOrFail(postId)
    data.categoryId = request.input('categoryId')
    data.title = request.input('title')
    data.content = request.input('content')
    const respons = await data.save()
    return respons
  }

  public async destroy({ params }: HttpContextContract) {
    const postId = params.id
    const data = await Post.findOrFail(postId)
    const respons = await data.delete()
    return respons
  }
}

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/category', 'CategoriesController.index')
Route.post('/category', 'CategoriesController.store')
Route.put('/category/:id', 'CategoriesController.update')
Route.delete('/category/:id', 'CategoriesController.destroy')

Route.get('/post', 'PostsController.index')
Route.post('/post', 'PostsController.store')
Route.put('/post/:id', 'PostsController.update')
Route.delete('/post/:id', 'PostsController.destroy')

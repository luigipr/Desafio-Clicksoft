/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

//import UsersController from '#controllers/users_controller'
//import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
  router.get('/', async () => {
    return {
      hello: 'world',
  }
})


  router.post('/users', 'UsersController.store')


router.get('/users/:id', async () => {
  return {
    userscontroller: 'index',
  }
})

router.delete('/users/:id', async () => {
  return {
    userscontroller: 'delete',
  }
})

router.patch('/users/:id', async () => {
  return {
    userscontroller: 'update',
  }
})

router.post('/users/:id/classes', async () => {
  return {
    classescontroller: 'store',
  }
})

router.patch('/users/:id/classes/:classId', async () => {
  return {
    classescontroller: 'update',
  }
})

router.delete('/users/:id/classes/:classId', async ({ params }) => {

  if ( params.tipo !== 'professor' ) {
    return {
      classescontroller: 'delete with tipo ' + params.tipo,
    }
  }

  return {
    classescontroller: 'delete',
  }
})

router.get('/users/:id/classes/:classId', async () => {
  return {
    classescontroller: 'index',
  }
})

router.patch('/users/:id/classes/:classId/:studentId', async () => {
  return {
    classescontroller: 'update',
  }
}).prefix('/api')})

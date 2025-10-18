/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/users', async () => {
  return {
    userscontroller: 'create',
  }
})

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
    classescontroller: 'create',
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
})
import Elysia from 'elysia'

export const apiController = new Elysia({ prefix: '/api' })
  .get('/hello', () => ({
    message: 'Hello, world!',
    method: 'GET',
  }))
  .put('/hello', () => ({
    message: 'Hello, world!',
    method: 'PUT',
  }))
  .get('/hello/:name', ({ params }) => ({
    message: `Hello, ${params.name}!`,
  }))

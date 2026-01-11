import Elysia from 'elysia'

export const authController = new Elysia({ prefix: '/auth' }).post(
  '/login',
  async () => {
    return { message: 'Login endpoint' }
  }
)

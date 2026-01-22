import index from 'app/index.html'
import Elysia from 'elysia'
import { apiController } from './controllers/api'
import { authController } from './controllers/auth'

const app = new Elysia()
  .get('/', index)
  .use(apiController)
  .mount(authController.fetch)
  .get('/*', async ({ server, set }) => {
    set.headers['Content-Type'] = 'text/html'
    // biome-ignore lint/style/noNonNullAssertion: cannot be null here
    return fetch(server!.url!).then(res => res.text())
  })
  .listen(3000)

console.log(`🚀 Server running at ${app.server?.url}`)
